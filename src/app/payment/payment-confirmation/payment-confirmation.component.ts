import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/app.service';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-payment-confirmation',
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.css']
})
export class PaymentConfirmationComponent implements OnInit {
  paymentRef: any;
  loading: boolean = true;
  txnReference: any;
  responseText: any;
  approved: boolean = false;

  BtnTxt: string = "Continue";

  constructor(
    private router: Router,
    private api: ApiService,
    private mainServ: AppService,
    private toast: ToastrService) { }

  ngOnInit(): void {
    this.paymentRef = this.mainServ.paymentRef;
    this.mainServ.paymentRef = undefined;

    if(this.paymentRef){

      setTimeout(() => this.confirmPayment(), 5000);
      
    } else {
      this.router.navigateByUrl('/portal');
    }
    
  }

  confirmPayment(){
    if(this.paymentRef.reqid){
      this.api.confirmPayment(this.paymentRef.reqid).subscribe(res => {
        if(res){   
          if(res.error){
            this.toast.error(res.error.text);
            this.router.navigateByUrl('/portal');
          } else {
            this.loading = false;
            if(res.responseData.responseCode == "00"){
              this.approved = true;
              this.responseText = "YOUR PAYMENT HAS BEEN RECEIVED";
            }else {
              this.responseText = res.responseData.responseText;
              this.BtnTxt = "Try Again"
            }
            
            this.txnReference = res.responseData.txnReference;
          }
        }
      }, () => {
        this.toast.error('Payment Failed!');
        this.router.navigateByUrl('/portal');
      });
    }
  }

  continue() {
    this.router.navigateByUrl('/portal');
  }
}
