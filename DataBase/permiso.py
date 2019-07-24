from typing import List

from Backend.Entidades import PermisoEntidad
from DataBase.DBConexion import DB


class PermisoDB:
    __DB = None

    def __init__(self) -> None:
        self.__DB = DB()

    def guardar_permiso(self, nuevo_permiso_entidad: PermisoEntidad) -> int:
        ...

    def obtener_permisos(self) -> None:
        value = self.__DB.llamar_sp('obtenerTodoPermisos', [])
        print(value)


per = PermisoDB()
per.obtener_permisos()
