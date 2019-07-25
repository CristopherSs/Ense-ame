import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PermisosComponent } from './permisos/permisos.component';
import { RolesComponent } from './roles/roles.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AddEditComponent } from './permisos/add-edit/add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PermisosComponent,
    RolesComponent,
    UsuarioComponent,
    AddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
