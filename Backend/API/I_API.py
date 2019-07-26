from abc import abstractmethod
from typing import List

from flask import Flask
from flask.views import MethodView


class API(MethodView):

    @abstractmethod
    def get(self):
        ...

    @abstractmethod
    def post(self):
        ...

    @abstractmethod
    def delete(self, id: int):
        ...

    @abstractmethod
    def register_url(self, app: Flask):
        ...

    def _convertir_a_diccionarios(self, objetos: List) -> List:
        lista_de_diccionarios = []
        for entidad in objetos:
            lista_de_diccionarios.append(entidad.__dict__)
        return lista_de_diccionarios
