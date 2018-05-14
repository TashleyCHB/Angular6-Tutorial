import { Component, OnInit } from '@angular/core';
import { Hero } from '../classes/hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, public messageService: MessageService) {
  }

  ngOnInit() {
    this.getHeroes();
  }


  onSelect(paramHero: Hero): void {
    this.messageService.add('Heroes Component: loaded hero ' + paramHero.name);
    this.selectedHero = Object.assign({}, paramHero);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
