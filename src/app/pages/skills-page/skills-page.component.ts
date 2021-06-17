import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SKILLS_DATA } from '../../services/data/skillsData.data';

const knowledges: Object = [];
const capabilities: Object = [];

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

  skills = SKILLS_DATA;

  knowledges = ['agile', 'rwd', 'prototype', 'uxUi', 'seo', 'accesibility'];
  
  capabilities = ['artView', 'workTeam', 'management', 'multitask', 'selfTaught', 'english'];

  constructor( private translate: TranslateService ) { }

  useLanguage(language: string): void {
    this.translate.use(language);
  }


  ngOnInit() {
  }

}
