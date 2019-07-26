import { Component, OnInit } from '@angular/core';
import { RolService } from './../../servicioApi/rolServicio';
import { UsuarioService } from './../../servicioApi/usuarioServicio';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { UsuarioComponent } from '../usuario.component';
import { Rol } from 'src/app/Entidades/RolEntidad';
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class UAddEditComponent implements OnInit {
  main: UsuarioComponent;
  name: string ;
  roles: Rol[];
  constructor(private rService: RolService, private uService: UsuarioService,
    private snackBar: MatSnackBar, public dialogRef: MatDialogRef<UAddEditComponent>, ) {
    this.name = this.dialogRef.id
    this.main = this.dialogRef._containerInstance._config.data
    rService.getRoles().subscribe(item => this.roles = item as unknown as Rol[]);
  }
  ngOnInit() {
  }
  guardarUsuario(fullName: string, ci: number, apodo: string,
    email: string, password: string, rol: Rol) {
    console.log(rol);
    this.dialogRef.close();
  }
  onClose() {
    this.dialogRef.close();
  }
}
