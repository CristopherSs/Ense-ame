from typing import List, Union, Tuple, Dict

from Backend.Entidades.RolEntidad import RolEntidad
from DataBase.i_gestorDB import IGestorDB
from DataBase.permiso import PermisoDB


class RolDB(IGestorDB):

    def guardar(self, nuevo_rol_entidad: RolEntidad) -> Union[None, int]:
        return self.DB.llamar_sp('guardarRol', [nuevo_rol_entidad.nombre, nuevo_rol_entidad.descripcion])

    def obtener(self) -> Union[List, None]:
        valores_roles = self.DB.llamar_sp('obtenerTodoRol', [])
        if valores_roles is not None:
            lista_roles = []
            for datos_rol in valores_roles:
                valores_permiso_rol = self.DB.llamar_sp('obtenerTodoPermisoRol', [datos_rol[0]])
                datos_rol = list(datos_rol)
                permisos = self.__obtener_permisos(valores_permiso_rol)
                datos_rol.append(permisos)
                entidad = self.convertidor_entidad(datos_rol)
                lista_roles.append(entidad)
            return lista_roles
        return None

    def eliminar(self, idPermiso: int) -> Union[int, None]:
        return self.DB.llamar_sp('eliminarRol', [idPermiso])

    def obtener_especifico(self, idRol: int) -> Union[None, object]:
        valores = self.DB.llamar_sp('obtenerRol', [idRol])
        if len(valores) is not 0:
            datos = list(valores[0])
            permisos_id = self.DB.llamar_sp('obtenerTodoPermisoRol', [datos[0]])
            permisos = self.__obtener_permisos(permisos_id)
            datos.append(permisos)
            return self.convertidor_entidad(datos)
        return None

    def __obtener_permisos(self, idPermisos: List) -> List:
        permisos = []
        permisosDB = PermisoDB()
        for idPermiso in idPermisos:
            permisos.append(permisosDB.obtener_especifico(idPermiso))
        return permisos

    def convertidor_entidad(self, datos_entidad: Union[List, Dict]) -> object:
        if type(datos_entidad) is not dict:
            return RolEntidad(
                **{
                    "rolId": datos_entidad[0],
                    "nombre": datos_entidad[1],
                    "descripcion": datos_entidad[2],
                    "permisos": datos_entidad[3]
                })
        return RolEntidad(**datos_entidad)
