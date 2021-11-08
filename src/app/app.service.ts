import { Injectable } from '@angular/core';
declare var loadPaycorpPayment: any;
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  loggedUser: any;
  paymentRef: any;

  loadPayment(){
    loadPaycorpPayment(this.buildPayment());
  }

  buildPayment() {

    if(!this.loggedUser){
      let user = sessionStorage.getItem('doks-webapp-user');
      this.loggedUser = JSON.parse(atob(user));
    }

    let userObj = this.loggedUser;
    
    return {
          clientId: 14004839,
          paymentAmount: 15000000,
          currency: 'LKR',
          returnUrl: `https://doksinternational.com/payment`,
          //returnUrl: `http://localhost:4200/payment`,
          clientRef: userObj.userId,
          comment: userObj.userId
    };
  }
}
