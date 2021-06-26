import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-feeds',
  templateUrl: './news-feeds.component.html',
  styleUrls: ['./news-feeds.component.css']
})
export class NewsFeedsComponent implements OnInit {

  newsfeed:string; 

  constructor() {
    this.newsfeed = "Registration Opens on 07th July.. Stay tuned.....";
  
   }

  ngOnInit(): void {
  }

}
