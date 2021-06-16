import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent implements OnInit {

  author = {
    name: 'Miguel',
    surname: 'Baumann'
  };

  features = ['Diseño', 'Maquetación', 'Desarrollo front'];

  constructor() { }

  ngOnInit() {
  }

}
