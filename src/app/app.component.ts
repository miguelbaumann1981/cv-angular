import { Component, ViewEncapsulation, Inject, EventEmitter } from '@angular/core';
import { PageScrollService, EasingLogic } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';
import { MenuService } from './services/menu.service';
import { MenuOption } from './models/menuOption.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'CV Miguel Baumann';

  options: MenuOption[] = [];

  changeText: boolean;

  public myEasing: EasingLogic = (t: number, b: number, c: number, d: number): number => {
    // easeInOutExpo easing
    if (t === 0) {
      return b;
    }
    if (t === d) {
      return b + c;
    }
    // tslint:disable-next-line:no-conditional-assignment
    if ((t /= d / 2) < 1) {
      return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    }

    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  }

  constructor(
    private translate: TranslateService,
    public menuService: MenuService, 
    private pageScrollService: PageScrollService, 
    @Inject(DOCUMENT) private document: any
    ) {
      translate.setDefaultLang('es');

      this.changeText = false;
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  async getOptions() {
    this.options = await this.menuService.getLeftOptions();
  }
    
  ngOnInit(): void {
    this.getOptions();
  }

  public goToLastHeading(id): void {
    // You may use any valid css selector as scroll target (e.g. ids, class selectors, tags, combinations of those, ...)
    // const pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '.theEnd');
    const subscriber = new EventEmitter<boolean>();
    subscriber.subscribe((val) => {
      // Reached last heading
    });
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#' + id,
      scrollFinishListener: subscriber,
    });
  }

}
