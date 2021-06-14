import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';


const routes: Routes = [
  // { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', component: ProfilePageComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactPageComponent, pathMatch: 'full' },
  // { path: '**', redirectTo: 'profile', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
