import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AppService } from '../app.service';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router, private mainServ: AppService) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/account']);
      return false;
    }
    if(!this.mainServ.loggedUser){
      let user = sessionStorage.getItem('doks-webapp-user');
      this.mainServ.loggedUser = JSON.parse(atob(user));
    }

    return true;
  }
}