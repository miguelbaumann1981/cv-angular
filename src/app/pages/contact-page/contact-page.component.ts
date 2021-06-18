import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorPageComponent } from '../error-page/error-page.component';

const personalData: Object = [];

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactPageComponent implements OnInit {

  titlePage = {
    icon: 'fas fa-envelope',
    text: 'contact'
  }

  personalData = [
    {
      icon: 'fas fa-envelope',
      tooltip: 'contacto@miguelbaumann.es',
      classTooltip: 'tooltip-xl',
      url: 'mailto:contacto@miguelbaumann.es',
    },
    {
      icon: 'fas fa-mobile-alt',
      tooltip: '(+34) 628 681 538',
      classTooltip: 'tooltip-xl',
      url: ''
    },
    {
      icon: 'fab fa-linkedin-in',
      tooltip: 'Linkedin',
      classTooltip: 'tooltip-xl',
      url: 'https://es.linkedin.com/in/miguel-baumann-58542347'

    },
    {
      icon: 'far fa-file-alt',
      tooltip: 'Portfolio',
      classTooltip: 'tooltip-xl',
      url: 'http://miguelbaumann.es/'
    }
  ];

  constructor( private translate: TranslateService, private dialog: MatDialog ) { }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  errorForm() {
    const dialogRef = this.dialog.open(ErrorPageComponent);
} 

  ngOnInit() {
  }

}
