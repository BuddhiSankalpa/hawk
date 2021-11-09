import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { MustMatch } from 'src/app/_helpers/must-match.validator';
import { ApiService } from 'src/app/services/api-service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private modalRef: BsModalRef,
    private toast: ToastrService,
    private mainServ: AppService,
    private api: ApiService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      newPassword: new FormControl(''),
      repassword: new FormControl('')
    },
    {
      validator: MustMatch("newPassword", "repassword"),
    });

    let userObj = this.mainServ.loggedUser;
    if(userObj){
      this.profileForm.get('firstName').patchValue(userObj.firstName);
      this.profileForm.get('lastName').patchValue(userObj.lastName);
      this.profileForm.get('phone').patchValue(userObj.phone);
    }
  }

  closeModal() {
    this.modalRef.hide();
  }

  updateProfile =()=>{

    let formval = this.profileForm.getRawValue();
    let profileUpdateObj: any = {
      email: this.mainServ.loggedUser.email,
      firstName: formval.firstName,
      lastName: formval.lastName,
      phone: formval.phone,
      password: formval.password,
      newPassword: formval.newPassword != '' ? formval.newPassword : null,
    }

    this.api.update(profileUpdateObj).subscribe(res => {
      if(res){
        if(res.status){
          this.toast.success(res.message);

          let userObj = this.mainServ.loggedUser;
          userObj['firstName'] = profileUpdateObj['firstName'];
          userObj['lastName'] = profileUpdateObj['lastName'];
          userObj['phone'] = profileUpdateObj['phone'];

          sessionStorage.setItem('doks-webapp-user', btoa(JSON.stringify(this.mainServ.loggedUser)));

          this.closeModal();
        }else{
          this.toast.warning(res.message);
        }
      }
    }, () => {
      this.toast.error('Profile Updating Failed!');
    });
  }
}
