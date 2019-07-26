import { Component, OnInit } from '@angular/core';
import { Permiso } from '../Entidades/PermisoEntidad';
import { AddEditComponent } from './add-edit/add-edit.component';
import { PermisoService } from '../servicioApi/permisoServicio';
import { MatTableDataSource, MatSnackBar, MatDialogConfig, MatDialog } from '@angular/material'

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.css']
})
export class PermisosComponent implements OnInit {

  permisos: Permiso[] = [];
  dataSource = new MatTableDataSource<Permiso>(this.permisos);

  constructor(private servicio: PermisoService, private snackBar: MatSnackBar,
     private dialog: MatDialog, ) { }

  openAddEditComponent(name: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.id = name
    dialogConfig.data = new Object(this)
    this.dialog.open(AddEditComponent, dialogConfig)
  }
  ngOnInit() {
    this.obtenerPermisos();
  }
  obtenerPermisos() {
    this.servicio.getPermisos().subscribe(item => {
      this.permisos = (item as unknown as Permiso[]);
      this.dataSource = new MatTableDataSource<Permiso>(this.permisos);
    });
  }
  eliminarPermiso(idPermiso: number) {
    this.servicio.deletePermiso(idPermiso).subscribe(item => { this.obtenerPermisos(); });
  }

}
