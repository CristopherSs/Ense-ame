from dataclasses import dataclass


@dataclass
class PermisoEntidad:
    permisoId = int
    name = str
    descripcion = str
