import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

const author: Object = '';
const features: Object = [];

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

  features = ['design', 'layout', 'frontDevelopment'];

  status: boolean = false;

  constructor(private translate: TranslateService) {
    
   }

   useLanguage(language: string): void {
    this.translate.use(language);
  }

  activeMenu(event){
    this.status = !this.status;
    event.stopPropagation();   
}

  ngOnInit() {
  }

}
