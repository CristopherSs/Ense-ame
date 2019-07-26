from abc import abstractmethod
from typing import List, Union
from DataBase.DBConexion import DB


class IGestorDB:
    DB = None

    def __init__(self) -> None:
        self.DB = DB()

    @abstractmethod
    def guardar(self, nueva_entidad: object) -> Union[None, int]:
        ...

    @abstractmethod
    def obtener(self) -> Union[List, None]:
        ...

    @abstractmethod
    def eliminar(self, idRecord: int) -> Union[int, None]:
        ...

    @abstractmethod
    def obtener_especifico(self, idRecord: int) -> Union[None, object]:
        ...

    @abstractmethod
    def convertidor_entidad(self, datos_entidad: List) -> object:
        ...
