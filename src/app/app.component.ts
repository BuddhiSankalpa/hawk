import { Component } from '@angular/core';
import { FacebookService } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'doks-webapp';

  constructor(
    private fb: FacebookService
  ) {

    fb.init({
      appId            : '177698677845743',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.12'
    });

  }
}
