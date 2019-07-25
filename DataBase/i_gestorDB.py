import dataclasses
from abc import abstractmethod
from typing import List, Union
from DataBase.DBConexion import DB


class IGestorDB:
    __DB = None

    def __init__(self) -> None:
        self.__DB = DB()

    @abstractmethod
    def guardar(self, nueva_entidad: dataclasses) -> Union[None, int]:
        ...

    @abstractmethod
    def obtener(self) -> Union[List, None]:
        ...

    @abstractmethod
    def eliminar(self, idRecord: int) -> Union[int, None]:
        ...
