from typing import List

from Backend.Entidades.PermisoEntidad import PermisoEntidad
from Backend.Entidades.RolEntidad import RolEntidad
from DataBase.DBConexion import DB


class PermisoDB:
    __DB = None

    def __init__(self) -> None:
        self.__DB = DB()

    def guardar_permiso(self, nuevo_permiso_entidad: PermisoEntidad) -> int:
        ...

    def obtener_permisos(self) -> None:
        valores = self.__DB.llamar_sp('obtenerTodoPermisos', [])
        lista_permisos = []
        for datos in valores:
            dato_unitario = \
                {
                    "permisoId": datos[0],
                    "nombre": datos[1],
                    "descripcion": datos[2],
                }
            lista_permisos.append(PermisoEntidad(**dato_unitario))
        return lista_permisos


per = PermisoDB()
per.obtener_permisos()
