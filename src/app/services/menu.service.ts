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
              }),
             
              new MenuOption({
                icon: 'fas fa-briefcase',
                title: 'Experiencia',
                href: 'experience',
                
              }),
              new MenuOption({
                icon: 'fas fa-user-graduate',
                title: 'Formación',
                href: 'education',
               
              }),
              new MenuOption({
                icon: 'fas fa-laptop',
                title: 'Competencias',
                href: 'skills',
               
              }),
              new MenuOption({
                icon: 'fas fa-envelope',
                title: 'Contacto',
                href: 'contact',
               
              }),
            ]

            resolve(options);
        });
    }

  navigate(menu: MenuOption) {
        this.router.navigate([menu.href]);
    }
}

