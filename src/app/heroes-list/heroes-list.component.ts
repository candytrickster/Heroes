import { Component, OnInit } from '@angular/core';
import Hero from '../shared/hero'

// const HEROES =[
//   {name:'Superman', description:'Faster than a speeding bullet'},
//   {name:'Batman', description:'Best of them all'},
//   {name:'Wonder Woman', description:'Do do do do do do doo'}
// ];

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes: Array<sny>;
  //or heroes: any;

  constructor() {
    this.heroes = [
      new Hero("Superman",'Faster than a speeding bullet'),
      new Hero("Batman", 'Best of them all'),
      new Hero("Wonder Woman",'Do do do do do do doo')
    ];
  }

  ngOnInit() {
    //for loading data
  }

  greet(name:string) {
    alert(`yo, ${name}`);
  }
}
