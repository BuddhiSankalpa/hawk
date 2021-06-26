import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  register: { FirstName: any,LastName: any,Email: any,Phone: any,Comments: any  };
 
  constructor() {   

    this.register = {
      FirstName : "",
      LastName : "",
      Email : "",
      Phone : "",
      Comments : ""
    }
  }

  ngOnInit(): void {
  }

  public setTab2( ){
  document.getElementById('registration').style.display = "block";   
    document.getElementById('login').style.display = "none";   
     document.getElementById('tab-btn-1').classList.remove('selected')  ;
     document.getElementById('tab-btn-2').classList.add('selected')  ;
  
  }

  public setTab1( ){
  document.getElementById('registration').style.display = "none";    
    document.getElementById('login').style.display = "block";   
    document.getElementById('tab-btn-2').classList.remove('selected')  ;
    document.getElementById('tab-btn-1').classList.add('selected')  ;
  }

}
