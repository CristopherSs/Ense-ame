from typing import List

from flask import jsonify, Flask, Response
from flask.views import MethodView

#from DataBase.permiso import PermisoDB


class PermisoAPI(MethodView):

    def __init__(self) -> None:...

    def get(self) -> jsonify:
       # permisos = self.__DB.obtener_permisos()
       # if permisos is None:
       #     return Response(500)
       # return jsonify(self.__convertir_a_diccionarios(permisos))
        return jsonify("perra")

    def register_url(self, aplication: Flask) -> None:
        api = PermisoAPI.as_view('PermisoAPI')
        aplication.add_url_rule('/getPermisos', view_func=api, methods=['GET'])

    def __convertir_a_diccionarios(self, objetos: List) -> List:
        lista_de_diccionarios = []
        for entidad in objetos:
            lista_de_diccionarios.append(entidad.__dict__)
        return lista_de_diccionarios


app = Flask(__name__)
api = PermisoAPI()
api.register_url(app)
app.run('localhost', '5000')
