import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  hammer = 'Mjolnir';
  power = 90001;
  hero = {
    name: 'Bob the Builder',
    slogan: 'Can we build it?',
    answer: 'Yes we can!'
  }
}
