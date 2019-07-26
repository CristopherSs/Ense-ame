import { Rol } from './RolEntidad';

export class Usuario {
    ci: number;
    nombreCompleto: string;
    email: string;
    apodo: string;
    password: string;
    rol: Rol
}