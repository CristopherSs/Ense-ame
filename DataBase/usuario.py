from typing import List, Union, Dict

from Backend.Entidades.RolEntidad import RolEntidad
from Backend.Entidades.UsuarioEntidad import UsuarioEntidad
from DataBase.i_gestorDB import IGestorDB
from DataBase.rol import RolDB


class UsuarioDB(IGestorDB):

    def guardar(self, nuevo_usuario_entidad: UsuarioEntidad) -> Union[None, int]:

        return self.DB.llamar_sp('guardarUsuario',
                                 [nuevo_usuario_entidad.ci, nuevo_usuario_entidad.nombreCompleto,
                                  nuevo_usuario_entidad.email, nuevo_usuario_entidad.apodo,
                                  nuevo_usuario_entidad.password, nuevo_usuario_entidad.rol.rolId])

    def obtener(self) -> Union[List, None]:
        valores_usuarios = self.DB.llamar_sp('obtenerTodoUsuario', [])
        if valores_usuarios is not None:
            lista_usuarios = []
            for datos_usuario in valores_usuarios:
                datos_usuario = list(datos_usuario)
                rol = self.__obtener_rol(datos_usuario.pop(5))
                datos_usuario.append(rol)
                entidad = self.convertidor_entidad(datos_usuario)
                lista_usuarios.append(entidad)
            return lista_usuarios
        return None

    def eliminar(self, idPermiso: int) -> Union[int, None]:
        return self.DB.llamar_sp('eliminarUsuario', [idPermiso])

    def __obtener_rol(self, idRol: int) -> object:
        rol = []
        rolDB = RolDB()
        rol.append(rolDB.obtener_especifico(idRol))
        return rol

    def convertidor_entidad(self, datos_entidad: Union[List, Dict]) -> object:
        if type(datos_entidad) is not dict:
            return UsuarioEntidad(
                **{"ci": datos_entidad[0],
                   "nombreCompleto": datos_entidad[1],
                   "email": datos_entidad[2],
                   "apodo": datos_entidad[3],
                   "password": datos_entidad[4],
                   "rol": datos_entidad[5]})
        datos_entidad["rol"] = RolEntidad(**datos_entidad["rol"])
        return UsuarioEntidad(**datos_entidad)
