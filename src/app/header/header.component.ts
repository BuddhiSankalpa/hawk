import { Component, OnInit } from '@angular/core';
import {hawkAdminUrl} from '../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  readonly loginUrl = `${hawkAdminUrl}/login`;

  ngOnInit(): void {
  }
}
