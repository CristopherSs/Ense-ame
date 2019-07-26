from flask import jsonify, Flask, Response, request

<<<<<<< HEAD
from Backend.API.I_API import API
from Backend.API.RolAPI import RolAPI
from Backend.API.UsuarioAPI import UsuarioAPI
from DataBase.permiso import PermisoDB


class PermisoAPI(API):
    __DB = None
=======
#from DataBase.permiso import PermisoDB


class PermisoAPI(MethodView):
>>>>>>> d021a53a1fbd1e4a9c7a124fcdc570649eeb4079

    def __init__(self) -> None:...

    def get(self) -> jsonify:
<<<<<<< HEAD
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
=======
       # permisos = self.__DB.obtener_permisos()
       # if permisos is None:
       #     return Response(500)
       # return jsonify(self.__convertir_a_diccionarios(permisos))
        return jsonify("perra")
>>>>>>> d021a53a1fbd1e4a9c7a124fcdc570649eeb4079

    def register_url(self, aplication: Flask) -> None:
        api = PermisoAPI.as_view('PermisoAPI')
        aplication.add_url_rule('/obtenerPermisos', view_func=api, methods=['GET'])
        aplication.add_url_rule('/guardarPermiso', view_func=api, methods=['POST'])
        aplication.add_url_rule('/eliminarPermiso/<idPermiso>', view_func=api, methods=['DELETE'])


app = Flask(__name__)
permiso = PermisoAPI()
permiso.register_url(app)
rol = RolAPI()
rol.register_url(app)
usu = UsuarioAPI()
usu.register_url(app)
app.run('localhost', '5000')
