import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  registerForm: FormGroup;
  verificationForm: FormGroup;
  user: any;

  constructor(private toastr: ToastrService, private api: ApiService) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.required),
      repassword: new FormControl('', Validators.required),
      //userType: new FormControl('', Validators.required),
      terms: new FormControl('', Validators.requiredTrue),
    });

    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.required),
    });

    this.verificationForm = new FormGroup({
      email: new FormControl('', Validators.email),
      code: new FormControl('', Validators.required),
    });

  }

  public setTab1() {
    document.getElementById('registration').style.display = 'block';
    document.getElementById('verification').style.display = 'none';
    document.getElementById('login').style.display = 'none';

    document.getElementById('tab-btn-1').classList.add('selected');
    document.getElementById('tab-btn-2').classList.remove('selected'); 

  }

  public setTab2() {
    document.getElementById('registration').style.display = 'none';
    document.getElementById('verification').style.display = 'none';
    document.getElementById('login').style.display = 'block'; 

    if(this.user){
      this.loginForm.controls.email.patchValue(this.user);
    }

    document.getElementById('tab-btn-1').classList.remove('selected');
    document.getElementById('tab-btn-2').classList.add('selected'); 

  }

  public setTab3() {
    document.getElementById('registration').style.display = 'none';
    document.getElementById('verification').style.display = 'block';
 
    if(this.user){
      this.verificationForm.controls.email.patchValue(this.registerForm.value.email);
    }
  }

  login() {
    this.api
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        (res) => {
          if (res) {
            let msg = res.message;
            if(res.status){
              this.toastr.success(msg);
            }else{
              this.toastr.error(msg);
            }
          }
        },
        () => {
          this.toastr.error('Login Failed!');
        }
      );
  }

  register() {
    if (
      this.registerForm.value.password != this.registerForm.value.repassword
    ) {
      this.toastr.error('Password did not match!');
      return;
    }

    let regObj = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      phone: this.registerForm.value.phone,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      userType: this.registerForm.value.userType,
    };

    this.api.register(regObj).subscribe(
      (res) => {
        if (res) {
          let msg = res.message;
          if(res.status){
            this.user = this.registerForm.value.email;
            this.toastr.success(msg);
            this.setTab3();
          }else{
            this.toastr.error(msg);
          }
        }
      },
      () => {
        this.toastr.error('Registration Failed!');
      }
    );
  }

  verify(){
    this.api
    .verify(this.verificationForm.value.email, this.verificationForm.value.code)
    .subscribe(
      (res) => {
        if (res) {
          let msg = res.message;
          if(res.status){
            this.toastr.success(msg);
            this.registerForm.reset();
            this.verificationForm.reset();
            this.setTab2();
          }else{
            this.toastr.error(msg);
          }
        }
      },
      () => {
        this.toastr.error('Verification Failed!');
      }
    );
  }

  loadPopUp(){
    document.getElementById('myBtn').style.display = 'block';
  }
}
