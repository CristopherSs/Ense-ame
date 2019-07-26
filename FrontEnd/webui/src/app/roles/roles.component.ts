import { Component, OnInit } from '@angular/core';
import { Rol } from '../Entidades/RolEntidad';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { RolService } from '../servicioApi/rolServicio';
@Component({
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles: Rol[] = [];
  dataSource = new MatTableDataSource<Rol>(this.roles);

  constructor(private servicio: RolService,private snackBar: MatSnackBar) { }

  openAddEditComponent(name: string) {
  }
  ngOnInit() {
    this.obtenerRoles();
  }
  obtenerRoles() {
    this.servicio.getRoles().subscribe(item => {
      this.roles = (item as unknown as Rol[])
    });
  }
  eliminarRol(idRol: number) {
    this.servicio.deleteRol(idRol).subscribe(item => 
      { this.obtenerRoles(); });
  }
}
