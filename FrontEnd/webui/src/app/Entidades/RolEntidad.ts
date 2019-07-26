import { Permiso } from './PermisoEntidad';

export class Rol
{
    rolId : number;
    nombre : string;
    descripcion : string;
    permisos : Permiso[];
}