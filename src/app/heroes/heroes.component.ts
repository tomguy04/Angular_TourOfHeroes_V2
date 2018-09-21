import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
// import { HEROES } from '../mock-heroes'; don't need this, it's provided by the service now.

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 selectedHero : Hero;
 heroes: Hero[];
//  heroes = HEROES; don't need this, its just a declaration now.
  
  // hero : Hero = {
  //   name : 'Windstorm',
  //   id :1
  // }


  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes():void{
    this.heroService.getHeroes().subscribe //subscribe to observalbe
      (heroes=>{ //send observable to function
        this.heroes=heroes //assign the observable to the local heroes
        console.log(this.heroes);
      }
    )
    
  }
  // getHeroes():void{
  //   this.heroes = this.heroService.getHeroes();
  // }

  onSelect(hero: Hero): void{
    this.selectedHero=hero;
  }
}
