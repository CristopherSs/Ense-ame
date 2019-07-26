from typing import List

from flask import jsonify, Flask, Response, request
from flask.views import MethodView

from DataBase.rol import RolDB


class RolAPI(MethodView):
    __DB = None

    def __init__(self) -> None:
        self.__DB = RolDB()

    def get(self) -> jsonify:
        roles = self.__DB.obtener()
        if roles is None:
            return Response(500)
        roles = self.__convertir_a_diccionarios(roles)
        for rol in roles:
            rol["permisos"] = self.__convertir_a_diccionarios(rol["permisos"])
        return jsonify(roles)

    def post(self) -> jsonify:
        valores_rol = request.get_json()
        id = self.__DB.guardar(self.__DB.convertidor_entidad(valores_rol))
        return jsonify(id[0])

    def delete(self, idRol: int) -> jsonify:
        self.__DB.eliminar(idRol)
        return jsonify(idRol)

    def register_url(self, aplication: Flask) -> None:
        api = RolAPI.as_view('RolAPI')
        aplication.add_url_rule('/obtenerRoles', view_func=api, methods=['GET'])
        aplication.add_url_rule('/guardarRol', view_func=api, methods=['POST'])
        aplication.add_url_rule('/eliminarRol/<idRol>', view_func=api, methods=['DELETE'])

    def __convertir_a_diccionarios(self, objetos: List) -> List:
        lista_de_diccionarios = []
        for entidad in objetos:
            lista_de_diccionarios.append(entidad.__dict__)
        return lista_de_diccionarios
