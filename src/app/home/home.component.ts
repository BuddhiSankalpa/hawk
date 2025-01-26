import { Component, OnInit  } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ApiService } from '../services/api-service.service';
import {hawkAdminUrl} from '../../environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

  animations: [
    trigger('scroll', [
      state('on', style({left: '-100px'})),
      transition('* => *', [
        style({left: '-100px'}),
        animate(10000, style({left: '100%'}))
      ])
    ])
  ]

})
export class HomeComponent implements OnInit {

  subscriptionUrl = `${hawkAdminUrl}/subscribe`;
  creatAccountUrl = `${hawkAdminUrl}/register`;

  constructor(private api: ApiService) {
    this.getAnnouncements();
  }

  // ngOnInit(): void {
  // }

  ngOnInit() {

  }
  imageObject = [{
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
    title: 'Hummingbirds are amazing creatures'
}, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg'
}, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
    title: 'Example with title.'
},{
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
    title: 'Hummingbirds are amazing creatures'
}, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg'
}, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
    title: 'Example two with title.'
}];

state = 0;

scrollDone() {
  this.state++;
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

  goToSubscription() {
    window.location.href = this.subscriptionUrl;
  }
}
