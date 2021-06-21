import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { EducationPageComponent } from './pages/education-page/education-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';


const routes: Routes = [
  { path: 'error', component: ErrorPageComponent, pathMatch: 'full' },
  { path: 'profile', component: ProfilePageComponent, pathMatch: 'full' },
  { path: 'experience', component: ExperiencePageComponent, pathMatch: 'full' },
  { path: 'education', component: EducationPageComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactPageComponent, pathMatch: 'full' },
  { path: 'skills', component: SkillsPageComponent, pathMatch: 'full' },
  { path: '**', component: LandingPageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
