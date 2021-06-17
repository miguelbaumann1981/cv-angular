import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EDUCATION_DATA } from 'src/app/services/data/educationData.data';

@Component({
  selector: 'education-page',
  templateUrl: './education-page.component.html',
  styleUrls: ['./education-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EducationPageComponent implements OnInit {

  titlePage = {
    icon: 'fas fa-user-graduate',
    text: 'education'
  }

  educations = EDUCATION_DATA;

  constructor( private translate: TranslateService ) { }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  ngOnInit() {
  }

}
