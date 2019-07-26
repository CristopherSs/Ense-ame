import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

=======
import { Permiso} from './../Entidades/PermisoEntidad';
>>>>>>> d021a53a1fbd1e4a9c7a124fcdc570649eeb4079
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
<<<<<<< HEAD

=======
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
>>>>>>> d021a53a1fbd1e4a9c7a124fcdc570649eeb4079
  constructor() { }

  ngOnInit() {
  }

}
