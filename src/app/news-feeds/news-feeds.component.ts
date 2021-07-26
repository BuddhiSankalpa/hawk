import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-news-feeds',
  templateUrl: './news-feeds.component.html',
  styleUrls: ['./news-feeds.component.css']
})
export class NewsFeedsComponent implements OnInit {

  newsfeed:string = "";

  constructor(private api: ApiService,
    private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.api.getNewsLine().subscribe(res =>{
      if(res && res[0] && res[0].data){
        let dataSet = JSON.parse(res[0].data);
        dataSet.forEach(element => {
          this.newsfeed = this.newsfeed + element + "....             ";
        });
      }
    });
  }
}
