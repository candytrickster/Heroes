import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weapons-list',
  templateUrl: './weapons-list.component.html',
  styleUrls: ['./weapons-list.component.css']
})
export class WeaponsListComponent implements OnInit {

  weapons = [
    {name: "Gorehowl"},
    {name: "Doom Hammer"},
    {name: "Ash Bringer"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
