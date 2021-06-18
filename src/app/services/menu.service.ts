import { Injectable } from '@angular/core';
import { MenuOption } from '../models/menuOption.model'
import { Router } from '@angular/router';


@Injectable()
export class MenuService {
  
  constructor(private router: Router) {
  }
    
  getLeftOptions(): Promise<MenuOption[]> {
        return new Promise<MenuOption[]>(resolve => {

            const options = [
              new MenuOption({
                icon: 'fas fa-user',
                title: 'Perfil',
                href: 'profile',
                hideText: 'changeText=true',
                showText: 'changeText=false'
              }),
             
              new MenuOption({
                icon: 'fas fa-briefcase',
                title: 'Experiencia',
                href: 'experience',
                hideText: 'changeText=true',
                showText: 'changeText=false'
              }),
              new MenuOption({
                icon: 'fas fa-user-graduate',
                title: 'Formación',
                href: 'education',
                hideText: 'changeText=true',
                showText: 'changeText=false'
              }),
              new MenuOption({
                icon: 'fas fa-laptop',
                title: 'Competencias',
                href: 'skills',
                hideText: 'changeText=true',
                showText: 'changeText=false'
              }),
              new MenuOption({
                icon: 'fas fa-envelope',
                title: 'Contacto',
                href: 'contact',
                hideText: 'changeText=true',
                showText: 'changeText=false'
              }),
            ]

            resolve(options);
        });
    }

  navigate(menu: MenuOption) {
        this.router.navigate([menu.href]);
    }
}

