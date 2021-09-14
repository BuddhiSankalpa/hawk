import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { PostLoginComponent } from './post-login/post-login.component';

const routes: Routes = [
  { path: 'account', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'portal', component: PostLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
