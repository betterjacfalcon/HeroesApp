import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interface/heroes.interface';
import { HeroeService } from '../../service/heroe.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: []
})
export class ListadoComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private heroeService: HeroeService) { }

  ngOnInit(): void {
    this.heroeService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

}
