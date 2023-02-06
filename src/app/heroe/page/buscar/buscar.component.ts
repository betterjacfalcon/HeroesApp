import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { Heroe } from '../../interface/heroes.interface';
import { HeroeService } from '../../service/heroe.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado!: Heroe | undefined;

  constructor( private heroeService:HeroeService) { }

  ngOnInit(): void {
  }

  buscado() {
  
    this.heroeService.getSugerencias( this.termino.trim())
      .subscribe( heroes => this.heroes = heroes);
  }

  opcionSeleccionada( event:MatAutocompleteSelectedEvent){

    if(!event.option.value){
      this.heroeSeleccionado =undefined;
      return;
    }
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.heroeService.getHeroesPorId( heroe.id! )
      .subscribe( heroe => this.heroeSeleccionado = heroe); 
  }

}
