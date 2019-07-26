import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/Entidades/RolEntidad';
import { MatTableDataSource, MatSnackBar, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { RolService } from 'src/app/servicioApi/rolServicio';
import { RolesComponent } from '../roles.component';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class RAddEditComponent implements OnInit {

  main: RolesComponent;
  name: string = 'Crear Rol';
  constructor(private snackBar: MatSnackBar, private servicio: RolService,
     public dialogRef: MatDialogRef<RAddEditComponent>, ) {
    this.main = this.dialogRef._containerInstance._config.data
  }
  onClose() {
    this.dialogRef.close()
  }
  ngOnInit() {
  }

  guardarRol(nombre: string, descripcion: string) {
    var rol = new Rol()
    rol.rolId = 0
    rol.nombre = nombre
    rol.descripcion = descripcion
    rol.permisos = []
    console.log(rol)
    this.servicio.saveRol(rol).subscribe(item => {});
    this.snackBar.open('Rol Agregrado', 'OK', { duration: 9000000 });
  }
  
}

