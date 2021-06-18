import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ErrorPageComponent implements OnInit {

  constructor( private translate: TranslateService, public dialogRef: MatDialogRef<ErrorPageComponent> ) { }

  closeDialog() {
    this.dialogRef.close();
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  ngOnInit() {
  }

}
