import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup} from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { ApiService } from 'src/app/services/api-service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-select-payment',
  templateUrl: './select-payment.component.html',
  styleUrls: ['./select-payment.component.css']
})
export class SelectPaymentComponent implements OnInit {

  profileForm: FormGroup;
  paymentDetails: any = {};
  paymentObj: any = {};

  loading: Boolean = true;
  optionNumber: number;
  planSelected: boolean;

  constructor(
    private mainServ: AppService,
    private api: ApiService,
    private toastr: ToastrService,
    private modalRef: BsModalRef) { }

  ngOnInit() {
    this.loadPaymentDetails();
  }

  loadPaymentDetails(){
    const userObj = this.mainServ.loggedUser;
    if (userObj){
      this.api.getUserPayment(userObj.userId).subscribe(res => {
        if (res){
          this.paymentDetails = Object.assign(res);
          this.setPaymentPlans(this.paymentDetails.currency);
        }else{
          this.setPaymentPlans(null);
        }

        this.loading = false;
      }, () => {
        this.toastr.error('Error Retreiving Payment Details!');
      });
    }
  }

  paymentPlanSelected(option: number){
    this.optionNumber = option;
    this.planSelected = true;
  }

  pay(option: number){
    const regFee = this.paymentDetails.paymentStatus === 'REGISTRATION_FEE' ? 0 : this.paymentObj.registration;

    switch (option) {
      case 0:
        this.mainServ.loadPayment(this.paymentDetails.pendingAmount, this.paymentDetails.currency);
        break;
      case 1:
        this.mainServ.loadPayment(this.paymentObj.full, this.paymentObj.currency);
        break;
      case 2:
        this.mainServ.loadPayment(regFee + this.paymentObj.plan1.inst1, this.paymentObj.currency);
        break;
      case 3:
        this.mainServ.loadPayment(regFee + this.paymentObj.plan2.inst1, this.paymentObj.currency);
        break;
      case 4:
        this.mainServ.loadPayment(this.paymentObj.registration, this.paymentObj.currency);
        break;
    }
  }

  setPaymentPlans(currency: String) {
    if (currency){
      this.paymentObj = this.mainServ.getPaymentPlans(currency);
      return;
    }

    const offset = new Date().getTimezoneOffset(), o = Math.abs(offset);
    const timezone = (offset < 0 ? '+' : '-') + ('00' + Math.floor(o / 60)).slice(-2) + ':' + ('00' + (o % 60)).slice(-2);
    if (timezone == '+05:30'){
      this.paymentObj = this.mainServ.getPaymentPlans('LKR');
    }else{
      this.paymentObj = this.mainServ.getPaymentPlans('USD');
    }

  }

  closeModal() {
    this.modalRef.hide();
  }
}
