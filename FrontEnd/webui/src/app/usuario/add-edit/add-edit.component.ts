import { Component, OnInit } from '@angular/core';
import { RolService } from './../../servicioApi/rolServicio';
import { UsuarioService } from './../../servicioApi/usuarioServicio';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { UsuarioComponent } from '../usuario.component';
import { Rol } from 'src/app/Entidades/RolEntidad';
import { Usuario } from 'src/app/Entidades/UsuarioEntidad';
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class UAddEditComponent implements OnInit {
  main: UsuarioComponent;
  name: string;
  roles: Rol[];
  bandera: Object[];
  constructor(private rService: RolService, private uService: UsuarioService,
    private snackBar: MatSnackBar, public dialogRef: MatDialogRef<UAddEditComponent>, ) {
    this.name = this.dialogRef.id
    this.main = this.dialogRef._containerInstance._config.data
    rService.getRoles().subscribe(item => this.roles = item as unknown as Rol[]);
  }
  ngOnInit() {
  }
  guardarUsuario(fullName: string, ci: number, apodo: string,
    email: string, password: string, rol: Rol, cPassword: string) {
    const usuario = new Usuario()
    console.log(ci);
    if(fullName && ci  && apodo && email && password && rol && cPassword != ''){
      if (password == cPassword) {
        usuario.nombreCompleto = fullName;
        usuario.ci = ci;
        usuario.password = password;
        usuario.email = email;
        usuario.apodo = apodo;
        usuario.rol = rol;
        this.uService.guardarUsuario(usuario).subscribe(item => {
          console.log(item);
          if (!item) {
            this.snackBar.open('El documento ya existe ', 'OK', { duration: 5000 });
          } else {
            this.main.obtenerUsuarios();
            this.snackBar.open('Usuario Agregrado', 'OK', { duration: 5000 });
            this.onClose();
          }
      })}else{
        this.snackBar.open('Las contraseñas no coinciden', 'OK', { duration: 5000 });

      }
    

    } else {
      this.snackBar.open('Los campos no deben ser vacios', 'OK', { duration: 5000 });
    }
  }
  onClose() {
    this.dialogRef.close();
  }
}
