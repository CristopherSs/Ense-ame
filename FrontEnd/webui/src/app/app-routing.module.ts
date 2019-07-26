import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { RolesComponent } from './roles/roles.component';
import { PermisosComponent } from './permisos/permisos.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'Usuarios',
    component:UsuarioComponent
  },
  {
    path:'Roles',
    component:RolesComponent
  },
  {
    path:'Permisos',
    component:PermisosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
