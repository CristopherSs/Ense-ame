import { Component, OnInit } from '@angular/core';
import { Permiso } from 'src/app/Entidades/PermisoEntidad';
import { PermisoService } from 'src/app/servicioApi/permisoServicio';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { PermisosComponent } from '../permisos.component';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  main: PermisosComponent;
  name: string = "Crear Permiso";
  constructor(private snackBar: MatSnackBar, private servicio: PermisoService, public dialogRef: MatDialogRef<AddEditComponent>, ) {
    this.name = this.dialogRef.id
    this.main = this.dialogRef._containerInstance._config.data
  }

  ngOnInit() {
  }

  guardarPermiso(nombre: string, descripcion: string) {
    var per = new Permiso()
    per.permisoId = 0
    per.nombre = nombre
    per.descripcion = descripcion
    console.log(per)
    this.servicio.savePermiso(per).subscribe(item => {
      this.main.obtenerPermisos();
    });
    this.snackBar.open('Permiso Agregrado', 'OK', { duration: 5000 });
    this.onClose();
  }
  onClose() {
    this.dialogRef.close()
  }
}
