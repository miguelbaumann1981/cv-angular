import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'education-page',
  templateUrl: './education-page.component.html',
  styleUrls: ['./education-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EducationPageComponent implements OnInit {

  titlePage = {
    icon: 'fas fa-user-graduate',
    text: 'experience'
  }

  constructor( private translate: TranslateService ) { }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  ngOnInit() {
  }

}
