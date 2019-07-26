import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Entidades/UsuarioEntidad';
import { MatTableDataSource, MatSnackBar, MatDialogConfig, MatDialog } from '@angular/material';
import { UsuarioService } from '../servicioApi/usuarioServicio';
import { UAddEditComponent } from './add-edit/add-edit.component';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];
  dataSource = new MatTableDataSource<Usuario>(this.usuarios);

  constructor(private servicio: UsuarioService,private snackBar: MatSnackBar,private dialog: MatDialog,) { }

  openUAddEditComponent(name: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.id = name
    dialogConfig.data = new Object(this)
    this.dialog.open(UAddEditComponent, dialogConfig)
  }
  ngOnInit() {
    this.obtenerUsuarios();
  }
  obtenerUsuarios() {
    this.servicio.getUsuarios().subscribe(item => {
      this.usuarios = (item as unknown as Usuario[])
    });
  }
  eliminarUsuario(idUsuario: number) {
    this.servicio.deleteUsuario(idUsuario).subscribe(item => 
      { this.obtenerUsuarios(); });
  }
}