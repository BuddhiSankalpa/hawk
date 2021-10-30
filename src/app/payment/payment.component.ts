import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../app.service';
import { ApiService } from '../services/api-service.service';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentRef: any = {};
  paymentRes: any = {};


  loading: boolean = true;
  txnReference: any;
  
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private mainServ: AppService) { }

  ngOnInit(): void {
  
    this.activatedRoute.queryParams.subscribe(params => {
      let paymentRef = {
        reqid: params['reqid'],
        clientRef: params['clientRef']
      }

      this.mainServ.paymentRef = paymentRef;

      this.router.navigateByUrl('/payment-confirmation');
    });
  }


}
