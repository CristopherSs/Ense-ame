from typing import List

from flask import jsonify, Flask, Response, request
from Backend.API.I_API import API
from DataBase.usuario import UsuarioDB


class UsuarioAPI(API):
    __DB = None

    def __init__(self) -> None:
        self.__DB = UsuarioDB()

    def get(self) -> jsonify:
        usuarios = self.__DB.obtener()
        if usuarios is None:
            return Response(500)
        usuarios = self._convertir_a_diccionarios(usuarios)
        for usuario in usuarios:
            usuario["rol"] = self._convertir_a_diccionarios(usuario["rol"])[0]
            usuario["rol"]["permisos"] = []
        return jsonify(usuarios)

    def post(self) -> jsonify:
        valores_usuario = request.get_json()
        if self.__DB.obtener_especifico(int(valores_usuario["ci"])) is False:
            id = self.__DB.guardar(self.__DB.convertidor_entidad(valores_usuario))
            return jsonify(id[0])
        return jsonify()

    def delete(self, idUsuario: int) -> jsonify:
        self.__DB.eliminar(idUsuario)
        return jsonify(idUsuario)

    def register_url(self, aplication: Flask) -> None:
        api = UsuarioAPI.as_view('UsuarioAPI')
        aplication.add_url_rule('/obtenerUsuarios', view_func=api, methods=['GET'])
        aplication.add_url_rule('/guardarUsuario', view_func=api, methods=['POST'])
        aplication.add_url_rule('/eliminarUsuario/<idUsuario>', view_func=api, methods=['DELETE'])
