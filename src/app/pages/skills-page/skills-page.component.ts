import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SkillsPageComponent implements OnInit {

  titlePage = {
    icon: 'fas fa-laptop',
    text: 'skills'
  }

  constructor( private translate: TranslateService ) { }

  useLanguage(language: string): void {
    this.translate.use(language);
  }


  ngOnInit() {
  }

}
