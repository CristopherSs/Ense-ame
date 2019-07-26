import { Component, OnInit } from '@angular/core';
import { Permiso } from '../Entidades/PermisoEntidad';
import { AddEditComponent } from './add-edit/add-edit.component';
import { PermisoService } from '../servicioApi/permisoServicio';
import { MatTableDataSource,MatSnackBar } from '@angular/material'

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.css']
})
export class PermisosComponent implements OnInit {

  permisos: Permiso[] = [];
  dataSource = new MatTableDataSource<Permiso>(this.permisos);

  constructor(private servicio: PermisoService,private snackBar: MatSnackBar) { }

  openAddEditComponent(name: string) {
  }
  ngOnInit() {
    this.obtenerPermisos();
  }
  obtenerPermisos() {
    this.servicio.getPermisos().subscribe(item => {
      this.permisos = (item as unknown as Permiso[])
    });
  }
  eliminarPermiso(idPermiso: number) {
    this.servicio.deletePermiso(idPermiso).subscribe(item => 
      { this.obtenerPermisos(); });
  }

}
