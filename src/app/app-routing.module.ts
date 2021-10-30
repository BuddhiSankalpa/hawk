import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EducationComponent } from './education/education.component';
import { PostLoginComponent } from './post-login/post-login.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentConfirmationComponent } from './payment/payment-confirmation/payment-confirmation.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'account', component: LoginComponent },
  // { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'payment', canActivate:[AuthGuard], component: PaymentComponent },
  { path: 'payment-confirmation', canActivate:[AuthGuard], component: PaymentConfirmationComponent },
  { path: 'portal', canActivate:[AuthGuard], component: PostLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
