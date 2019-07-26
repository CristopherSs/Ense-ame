import { Component, OnInit } from '@angular/core';
import { Rol } from '../Entidades/RolEntidad';
import { MatTableDataSource, MatSnackBar, MatDialogConfig, MatDialog } from '@angular/material';
import { RolService } from '../servicioApi/rolServicio';
import { RAddEditComponent } from './add-edit/add-edit.component';
@Component({
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles: Rol[] = [];
  dataSource = new MatTableDataSource<Rol>(this.roles);

  constructor(private servicio: RolService,private snackBar: MatSnackBar,private dialog: MatDialog,) { }

  openAddEditComponent(name: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.id = name
    dialogConfig.data = new Object(this)
    this.dialog.open(RAddEditComponent, dialogConfig)
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
