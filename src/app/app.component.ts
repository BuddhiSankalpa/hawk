import { Component, ViewChild } from '@angular/core';
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    '.container { max-width: 700px; background: #f7f7f7; margin: 50px auto; padding: 30px; border-radius: 15px; }',
    'h2 { margin-bottom: 20px; }',
    'h4 { margin-top: 40px; margin-bottom: 10px; }'
  ]
})
export class AppComponent {
  title = 'doks-webapp';
  
  constructor(
    private fb: FacebookService
  ) {

    console.log('Initializing Facebook');

    fb.init({
      appId            : '1487493871615435',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.12'
    });

  }
}
