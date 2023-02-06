import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './page/agregar/agregar.component';
import { BuscarComponent } from './page/buscar/buscar.component';
import { HomeComponent } from './page/home/home.component';
import { ListadoComponent } from './page/listado/listado.component';
import { HeroeRoutingModule } from './heroe-routing.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { HeroeComponent } from './page/heroe/heroe.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HomeComponent,
    ListadoComponent,
    HeroeComponent,
    HeroeTarjetaComponent,
    ImagenPipe
  ],
  imports: [
    CommonModule,
    HeroeRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class HeroeModule { }
