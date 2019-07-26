from typing import List, Union, Dict

from Backend.Entidades.PermisoEntidad import PermisoEntidad
from DataBase.i_gestorDB import IGestorDB


class PermisoDB(IGestorDB):

    def guardar(self, nuevo_permiso_entidad: PermisoEntidad) -> Union[None, int]:
        return self.DB.llamar_sp('guardarPermiso', [nuevo_permiso_entidad.nombre, nuevo_permiso_entidad.descripcion])

    def obtener_especifico(self, idPermiso: int) -> Union[None, object]:
        valores = self.DB.llamar_sp('obtenerPermiso', [idPermiso])
        if len(valores) is not 0:
            return self.convertidor_entidad(valores[0])
        return None

    def obtener(self) -> Union[List, None]:
        valores = self.DB.llamar_sp('obtenerTodoPermisos', []) or []
        if valores is not None:
            lista_permisos = []
            for datos in valores:
                lista_permisos.append(self.convertidor_entidad(datos))
            return lista_permisos
        return None

    def eliminar(self, idPermiso: int) -> Union[int, None]:
        return self.DB.llamar_sp('eliminarPermiso', [idPermiso])

    def convertidor_entidad(self, datos_entidad: Union[List, Dict]) -> object:
        if type(datos_entidad) is not dict:
            return PermisoEntidad(
                **{
                    "permisoId": datos_entidad[0],
                    "nombre": datos_entidad[1],
                    "descripcion": datos_entidad[2],
                })
        return PermisoEntidad(**datos_entidad)
