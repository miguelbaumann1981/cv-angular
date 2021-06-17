import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EXPERIENCE_DATA } from '../../services/data/experienceData.data';


@Component({
  selector: 'experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExperiencePageComponent implements OnInit {

  titlePage = {
    icon: 'fas fa-briefcase',
    text: 'experience'
  }

  experiences = EXPERIENCE_DATA;

  constructor( private translate: TranslateService ) { }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  ngOnInit() {
  }

}
