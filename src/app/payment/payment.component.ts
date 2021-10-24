import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api-service.service';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentRef: { reqid: any; clientRef: any; };

  
  constructor(private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private toast: ToastrService) { }

  ngOnInit(): void {
    

    this.activatedRoute.queryParams.subscribe(params => {
      this.paymentRef = {
        reqid: params['reqid'],
        clientRef: params['clientRef']
      }
    });
  }

  confirmPayment(){
    if(this.paymentRef && this.paymentRef.reqid){
      this.api.confirmPayment(this.paymentRef.reqid).subscribe(res => {
        if(res){
          console.log(res);
          this.toast.success('Payment Completed Succesfully!');
        }
      }, () => {
        this.toast.error('Payment Failed!');
      });
    }
  }
}
