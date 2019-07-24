from dataclasses import dataclass


@dataclass
class PermisoEntidad:
    PermisoId = int
    name = str
    descripcion = str
