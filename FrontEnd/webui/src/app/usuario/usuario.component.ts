import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Entidades/UsuarioEntidad';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { UsuarioService } from '../servicioApi/usuarioServicio';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];
  dataSource = new MatTableDataSource<Usuario>(this.usuarios);

  constructor(private servicio: UsuarioService,private snackBar: MatSnackBar) { }

  openAddEditComponent(name: string) {
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