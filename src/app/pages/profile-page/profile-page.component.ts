import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const titlePage: Object = {};
const description: String = '';
const illustrations: Object = [];

@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ProfilePageComponent implements OnInit {

  titlePage = {
    icon: 'fas fa-user',
    text: 'profile'
  }

  description = 'profileDescription';

  illustrations = [
    {
      image: 'sitio-web.svg',
      title: 'responsiveWebsites'
    },
    {
      image: 'aplicacion-web.svg',
      title: 'webApps'
    },
    {
      image: 'diseno-ux.svg',
      title: 'uxDesign'
    }
  ] 

  constructor( private translate: TranslateService ) { }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  ngOnInit() {
  }

}
