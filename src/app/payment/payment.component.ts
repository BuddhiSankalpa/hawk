import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api-service.service';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentRef: any = {};
  paymentRes: any = {};

  
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
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

          let data_array = res.split('&');

          data_array.forEach(element => {
            let data =  element.split('=');

            this.paymentRes[data[0]] = data[1];
          });
          
          if(this.paymentRes['responseCode'] == '00'){
            this.toast.success('Transaction was processed successfully!');
          }else {
            this.toast.error('Transaction Failed!');
            this.router.navigateByUrl('/portal');
          }
          
        }
      }, () => {
        this.toast.error('Payment Failed!');
        this.router.navigateByUrl('/portal');
      });
    }
  }
}
