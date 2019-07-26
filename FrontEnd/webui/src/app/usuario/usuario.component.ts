import { Component, OnInit } from '@angular/core';
import { Permiso} from './../Entidades/PermisoEntidad';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios : Permiso[] = [ { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 10 },
  { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 10 },
  { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 12 },
  { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 13 },
  { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 14 },
  { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 15 },
  { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 16 },
  { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 17 },
  { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 18 },
  { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 19 },];
  constructor() { }

  ngOnInit() {
  }

}
