import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';


const routes: Routes = [

  { path: '**', redirectTo: 'profile' },
  { path: '', redirectTo: 'profile' },
  { path: 'contact', component: ContactPageComponent },
  { path: 'profile', component: ProfilePageComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
