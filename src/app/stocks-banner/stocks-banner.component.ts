import { Component, OnInit,Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
@Component({
  selector: 'app-stocks-banner',
  templateUrl: './stocks-banner.component.html',
  styleUrls: ['./stocks-banner.component.css']
})

@Injectable()
export class StocksBannerComponent implements OnInit {

  stkData : any;

  constructor(private http: HttpClient) {

    console.log("Fetching Stock data")

    var token = "d4ccea666b59b2528c22f4fee70626f2";
    var symbol = "MSFT,TSLA";

    this.http.get<JSON>("http://api.marketstack.com/v1/eod/latest?access_key="+token+"&symbols="+symbol)
    .subscribe((data) => {

        if(data['data'].length != 0){
          this.stkData = data['data'];
        }

      }
    ); }

    getStatusUp(i1,i2){
      return (i1 < i2 || i1 == i2)
    }

    getStatusDown(i1,i2){
      return i1 > i2
    }
 

  ngOnInit(): void { 

    

  }

}
