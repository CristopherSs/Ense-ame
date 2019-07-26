from flask import jsonify, Flask, Response, request
from flask_cors import CORS
from Backend.API.I_API import API
from Backend.API.RolAPI import RolAPI
from Backend.API.UsuarioAPI import UsuarioAPI
from DataBase.permiso import PermisoDB


class PermisoAPI(API):
    __DB = None

    def __init__(self) -> None:
        self.__DB = PermisoDB()

    def get(self) -> jsonify:
        permisos = self.__DB.obtener()
        if permisos is None:
            return Response(500)
        return jsonify(self._convertir_a_diccionarios(permisos))

    def post(self) -> jsonify:
        valores_permiso = request.get_json()
        id = self.__DB.guardar(self.__DB.convertidor_entidad(valores_permiso))
        return jsonify(id[0])

    def delete(self, idPermiso: int) -> jsonify:
        self.__DB.eliminar(idPermiso)
        return jsonify(idPermiso)

    def register_url(self, aplication: Flask) -> None:
        api = PermisoAPI.as_view('PermisoAPI')
        aplication.add_url_rule('/obtenerPermisos', view_func=api, methods=['GET'])
        aplication.add_url_rule('/guardarPermiso', view_func=api, methods=['POST'])
        aplication.add_url_rule('/eliminarPermiso/<idPermiso>', view_func=api, methods=['DELETE'])


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
permiso = PermisoAPI()
permiso.register_url(app)
rol = RolAPI()
rol.register_url(app)
usu = UsuarioAPI()
usu.register_url(app)
app.run('localhost', '5000')
