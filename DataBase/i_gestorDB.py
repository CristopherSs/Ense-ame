from abc import abstractmethod
from typing import List, Union

from Backend.Entidades.PermisoEntidad import PermisoEntidad
from DataBase.DBConexion import DB


class IGestorDB:
    __DB = None

    def __init__(self) -> None:
        self.__DB = DB()

    @abstractmethod
    def guardar(self, nuevo_permiso_entidad: PermisoEntidad) -> Union[None, int]:
        ...

    @abstractmethod
    def obtener(self) -> Union[List, None]:
        ...

    @abstractmethod
    def eliminar(self, idPermiso: int) -> Union[int, None]:
        ...
