import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-feeds',
  templateUrl: './news-feeds.component.html',
  styleUrls: ['./news-feeds.component.css']
})
export class NewsFeedsComponent implements OnInit {

  newsfeed:string; 

  constructor() {
    this.newsfeed = "This is a news feed line place hol    -we    -webkit-mask-image: line CREATE src/app/header.2/ar ";
  
   }

  ngOnInit(): void {
  }

}
