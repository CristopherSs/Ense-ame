from typing import List, Union

from Backend.Entidades.PermisoEntidad import PermisoEntidad
from DataBase.i_gestorDB import IGestorDB


class PermisoDB(IGestorDB):

    def guardar(self, nuevo_permiso_entidad: PermisoEntidad) -> Union[None, int]:
        return self.__DB.llamar_sp('guardarPermiso', [nuevo_permiso_entidad.nombre, nuevo_permiso_entidad.descripcion])

    def obtener(self) -> Union[List, None]:
        valores = self.__DB.llamar_sp('obtenerTodoPermisos', []) or []
        if valores is not None:
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
        lista_permisos = valores
        return lista_permisos

    def eliminar(self, idPermiso: int) -> Union[int, None]:
        return self.__DB.llamar_sp('eliminarPermiso', [idPermiso])
