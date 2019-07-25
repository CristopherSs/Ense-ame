from dataclasses import dataclass

from Backend.Entidades import PermisoEntidad


@dataclass
class RolEntidad:
    rolId: int
    nombre: str
    descripcion: str
    permisos: [PermisoEntidad]
