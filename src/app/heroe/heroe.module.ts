import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './page/agregar/agregar.component';
import { BuscarComponent } from './page/buscar/buscar.component';
import { HomeComponent } from './page/home/home.component';
import { ListadoComponent } from './page/listado/listado.component';
import { HeroeRoutingModule } from './heroe-routing.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HomeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    HeroeRoutingModule,
    MaterialModule
  ]
})
export class HeroeModule { }
