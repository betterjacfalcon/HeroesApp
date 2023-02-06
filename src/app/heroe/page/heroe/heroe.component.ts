import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interface/heroes.interface';
import { HeroeService } from '../../service/heroe.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe

  constructor(private activatedRoute: ActivatedRoute,
              private heroeService: HeroeService ) { }

    ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.heroeService.getHeroesPorId(id) )
      )
      .subscribe( heroe => this.heroe = heroe );

  }

}
