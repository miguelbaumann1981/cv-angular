import { Injectable } from '@angular/core';
import { MenuOption } from '../models/menuOption.model'
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Injectable()
export class MenuService {
  
  constructor(private router: Router, private translate: TranslateService) {
  }
    
  getLeftOptions(): Promise<MenuOption[]> {
        return new Promise<MenuOption[]>(resolve => {

            const options = [
              new MenuOption({
                icon: 'fas fa-user',
                title: 'profile',
                href: 'profile'
              }),
             
              new MenuOption({
                icon: 'fas fa-briefcase',
                title: 'experience',
                href: 'experience'
              }),
              new MenuOption({
                icon: 'fas fa-user-graduate',
                title: 'education',
                href: 'education'
              }),
              new MenuOption({
                icon: 'fas fa-laptop',
                title: 'skills',
                href: 'skills'
              }),
              new MenuOption({
                icon: 'fas fa-envelope',
                title: 'contact',
                href: 'contact'
              }),
            ]

            resolve(options);
        });
    }

    useLanguage(language: string): void {
      this.translate.use(language);
    }

  navigate(menu: MenuOption) {
        this.router.navigate([menu.href]);
    }
}

