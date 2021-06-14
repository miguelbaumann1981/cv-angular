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
                icon: 'fas fa-address-card',
                title: 'Perfil',
                subtext: 'dashboardPage.myAccredDesc',
                url: '/profile',
                img: 'my-accreditation.jpg',
                alt: 'My accreditation',
                componentName: "ProfilePageComponent"
              }),
              new MenuOption({
                icon: 'fas fa-cog',
                title: 'Contacto',
                subtext: 'dashboardPage.eventConfigDesc',
                url: '/contact',
                img: 'config-event.jpg',
                alt: 'Event configuration',
                componentName: 'setTheEvent'
              }),
              new MenuOption({
                icon: 'fas fa-edit',
                title: 'menu.accreditationSearch',
                subtext: 'dashboardPage.accredSearchDesc',
                url: '/accreditationsSearch',
                img: 'accred-search.jpg',
                alt: 'Accreditations search',
                componentName: 'accreditationsSearch'
              }),
              new MenuOption({
                icon: 'fas fa-address-card',
                title: 'menu.accreditationsWorkflow',
                subtext: 'dashboardPage.accredSearchDesc',
                url: '/accreditationsWorkflow',
                img: 'accred-workflow.jpg',
                alt: 'Accreditations workflow',
                componentName: 'accreditationsWorkflow'
              }),
              new MenuOption({
                icon: 'fas fa-th-large',
                title: 'Configuration dashboard',
                subtext: 'dashboardPage.configDashboardDesc',
                url: '/configurationDashboard',
                img: 'accred-workflow.jpg',
                alt: 'Configuration dashboard',
                componentName: 'configurationDashboard'
              }),
              
            ]

            resolve(options);
        });
    }



  navigate(menu: MenuOption) {
        this.router.navigate([menu.url]);
    }
}

