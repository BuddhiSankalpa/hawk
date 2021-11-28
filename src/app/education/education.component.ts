import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  courseFee: string;

  constructor() { }

  ngOnInit(): void {
    this.setCourseFee();
  }


  public setTab1() {
    document.getElementById('beginner').style.display = 'flex';
    document.getElementById('advance').style.display = 'none';

    document.getElementById('tab-btn-1').classList.add('selected');
    document.getElementById('tab-btn-2').classList.remove('selected');
  }

  public setTab2() {
    document.getElementById('beginner').style.display = 'none';
    document.getElementById('advance').style.display = 'flex';


    document.getElementById('tab-btn-1').classList.remove('selected');
    document.getElementById('tab-btn-2').classList.add('selected');
  }

  setCourseFee(){
    var offset = new Date().getTimezoneOffset(), o = Math.abs(offset);
    let timezone = (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
    if(timezone == "+05:30"){
      this.courseFee = 'Rs.150,000.00';
    }else{
      this.courseFee = '$2000.00';
    }
  }
}
