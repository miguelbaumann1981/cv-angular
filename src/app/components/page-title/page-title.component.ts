import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageTitleComponent implements OnInit {

  @Input() iconTitle: string; 
  @Input() textTitle: string; 

  constructor() { }

  ngOnInit() {
  }

}
