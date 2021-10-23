import { Component, OnInit } from '@angular/core';

declare var loadPaycorpPayment: any;

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
    loadPaycorpPayment(this.buildPayment(), 'paycorp-payment');
  }

  buildPayment() {
    return {
          clientId: 14004839,// supplied by paycorp
          paymentAmount: 1010,
          currency: 'LKR',
          returnUrl: 'http://localhost:4200/payment-response',
          clientRef: 'CREF-12345',
          comment: 'This is a demo payment'
    };
  }

}
