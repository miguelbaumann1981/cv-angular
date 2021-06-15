import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfilePageComponent implements OnInit {

  titlePage = {
    icon: 'fas fa-times',
    text: 'Perfil'
  }

  constructor() { }

  ngOnInit() {
  }

}
