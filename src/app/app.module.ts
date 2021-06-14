import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// PÁGINAS
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { EducationPageComponent } from './pages/education-page/education-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

// COMPONENTES
import { MenuComponent } from './components/menu/menu.component';
import { ProgressSkillComponent } from './components/progress-skill/progress-skill.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProfilePageComponent,
    ExperiencePageComponent,
    EducationPageComponent,
    SkillsPageComponent,
    ContactPageComponent,
    MenuComponent,
    ProgressSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
