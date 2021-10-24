import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ApiService } from '../services/api-service.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AppService } from '../app.service';
declare var loadPaycorpPayment: any;
@Component({
  selector: 'app-post-login',
  templateUrl: './post-login.component.html',
  styleUrls: ['./post-login.component.css']
})
export class PostLoginComponent implements OnInit {

  constructor(public router: Router,
     private toastr: ToastrService,
      private mainServ: AppService,
      private api: ApiService,
      private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getAnnouncements();
  }

  logout = () => {
    this.toastr.warning('Logout Success!');
    sessionStorage.clear();
    this.router.navigate(['/account']);
  }

  payment = () => {
    //this.toastr.warning('Contact Helpdesk!');

    loadPaycorpPayment(this.buildPayment());
  }

  editProfileModal : BsModalRef;
  editProfile = () => {
    this.editProfileModal = this.modalService.show(EditProfileComponent, {
      animated: true,
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: true,
      class: 'modal-lg'
    });
  }

  announcementObj: any = {};
  getAnnouncements() {
    this.api.getAnnouncements().subscribe(res => {
      if(res){
        let webinar = res.find(a => a.type == 1);

        if(webinar){
          this.announcementObj['webinar'] = Object.assign(webinar);
        }

        let seminar = res.find(a => a.type == 2);

        if(seminar){
          this.announcementObj['seminar'] = Object.assign(seminar);
        }

      }
    });
  }

  buildPayment() {

    if(!this.mainServ.loggedUser){
      let user = sessionStorage.getItem('doks-webapp-user');
      this.mainServ.loggedUser = JSON.parse(atob(user));
    }

    let userObj = this.mainServ.loggedUser;
    
    return {
          clientId: 14004839,
          paymentAmount: 10,
          currency: 'LKR',
          returnUrl: `https://doksinternational.com/payment`,
          clientRef: 'CREF-'+ userObj.userId,
          comment: 'CREF-'+ userObj.userId
    };
  }

}
