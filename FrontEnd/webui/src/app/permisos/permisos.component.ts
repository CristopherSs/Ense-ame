import { Component, OnInit } from '@angular/core';
import { Permiso } from '../Entidades/PermisoEntidad';
import { AddEditComponent } from './add-edit/add-edit.component';
<<<<<<< HEAD
import { MatDialog, MatDialogConfig } from '@angular/material';
=======
>>>>>>> d021a53a1fbd1e4a9c7a124fcdc570649eeb4079

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.css']
})
export class PermisosComponent implements OnInit {

  permisos: Permiso[] = [
    { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 1 },
    { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 2 },
    { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 3 },
    { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 4 },
    { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 5 },
    { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 6 },
    { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 7 },
    { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 8 },
    { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 9 },
    { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 10 },
<<<<<<< HEAD
    { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 11 },
=======
    { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 10 },
>>>>>>> d021a53a1fbd1e4a9c7a124fcdc570649eeb4079
    { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 12 },
    { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 13 },
    { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 14 },
    { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 15 },
    { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 16 },
    { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 17 },
    { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 18 },
    { "descripcion": "fasfsdfa", "nombre": "perm1", "permisoId": 19 },

  ];

<<<<<<< HEAD
  constructor( private dialog: MatDialog,) { }

  openAddEditComponent(name:string)
  {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.id = name;

    const dialogRef = this.dialog.open(AddEditComponent, dialogConfig);
=======
  constructor() { }

  openAddEditComponent(name:string)
  {
>>>>>>> d021a53a1fbd1e4a9c7a124fcdc570649eeb4079
  }
  ngOnInit() {
  }

}
