import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/Entidades/RolEntidad';
import { MatTableDataSource, MatSnackBar, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { RolService } from 'src/app/servicioApi/rolServicio';
import { RolesComponent } from '../roles.component';
import { PermisoService } from 'src/app/servicioApi/permisoServicio';
import { Permiso } from 'src/app/Entidades/PermisoEntidad';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class RAddEditComponent implements OnInit {
  perSelecionados = new FormControl();
  permisos: Permiso[];
  main: RolesComponent;
  name: string = 'Crear Rol';
  constructor(private snackBar: MatSnackBar, private servicio: RolService,
    private perServicio: PermisoService,
    public dialogRef: MatDialogRef<RAddEditComponent>, ) {
    this.main = this.dialogRef._containerInstance._config.data
  }
  onClose() {
    this.dialogRef.close()
  }
  ngOnInit() {
    this.perServicio.getPermisos().subscribe(item => {
      this.permisos = item as unknown as Permiso[];
    })
  }

  guardarRol(nombre: string, descripcion: string) {
    var rol = new Rol()
    rol.rolId = 0
    if (nombre && descripcion != '') {
      console.log(this.perSelecionados.value)
      if (this.perSelecionados.value != null){
      rol.nombre = nombre
      rol.descripcion = descripcion
      rol.permisos = this.perSelecionados.value
      this.servicio.saveRol(rol).subscribe(item => {
        this.main.obtenerRoles();
      });
      this.snackBar.open('Rol Agregrado', 'OK', { duration: 5000 });
      this.onClose()
    } else {
      this.snackBar.open('Debes agregar permiso ', 'OK', { duration: 5000 });
    }
  }else{
    this.snackBar.open('Los campos no deben estar vacios', 'OK', { duration: 5000 });
  }

  }
}

