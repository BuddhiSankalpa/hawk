import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post-login',
  templateUrl: './post-login.component.html',
  styleUrls: ['./post-login.component.css']
})
export class PostLoginComponent implements OnInit {

  constructor(public router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  logout = () => {
    this.toastr.warning('Logout Success!');
    sessionStorage.clear();
    this.router.navigate(['/account']);
  }
  payment = () => {
    this.toastr.warning('Contact Helpdesk!');
    sessionStorage.clear();
  }

}
