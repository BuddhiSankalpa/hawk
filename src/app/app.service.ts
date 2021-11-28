import { Injectable } from '@angular/core';
declare var loadPaycorpPayment: any;
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  loggedUser: any;
  paymentRef: any;
  paymentAmount: number;
  currency: String

  loadPayment(paymentAmount: number, currency: String){
    loadPaycorpPayment(this.buildPayment(paymentAmount, currency));
  }

  buildPayment(paymentAmount: number, currency: String) {

    let userObj = this.loggedUser; 
    return {
          clientId: currency === 'LKR' ? 14004839 : 14004840,
          paymentAmount: paymentAmount * 100,
          currency: currency,
          returnUrl: `https://doksinternational.com/payment`,
          //returnUrl: `http://localhost:4200/payment`,
          clientRef: userObj.userId,
          comment: userObj.userId
    };
  }

  getPaymentPlans(currency: String){
    if(currency === 'LKR'){
      return {
        currency: 'LKR',
        full: 150000,
        plan1: {
          inst1: 100000,
          inst2: 50000
        },
        plan2: {
          inst1: 75000,
          inst2: 75000
        },
        registration: 5000
      }
    } else {
      return {
        currency: 'USD',
        full: 2000,
        plan1: {
          inst1: 1000,
          inst2: 1000
        },
        plan2: {
          inst1: 5000,
          inst2: 1500
        },
        registration: 50
      }
    }
  }
}
