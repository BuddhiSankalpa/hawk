import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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


}
