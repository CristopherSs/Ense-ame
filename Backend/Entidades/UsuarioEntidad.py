from dataclasses import dataclass

from Backend.Entidades import RolEntidad


@dataclass
class UsuarioEntidad:
    ci: int
    nombreCompleto: str
    email: str
    apodo: str
    password: str
    rol: RolEntidad
