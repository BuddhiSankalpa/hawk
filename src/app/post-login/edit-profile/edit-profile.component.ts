import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  registerForm: FormGroup;

  onClose: Subject<boolean>;
  constructor(private modalRef: BsModalRef) { }

  ngOnInit() {
    this.onClose = new Subject();
    this.registerForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      repassword: new FormControl('', Validators.required),
      //userType: new FormControl('', Validators.required),
      terms: new FormControl('', Validators.requiredTrue),
    });
  }

  closeModal(value: boolean) {
    this.onClose.next(value);
    this.modalRef.hide();
  }

  updateProfile =()=>{

  }
}
