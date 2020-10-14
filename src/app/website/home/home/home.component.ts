import { Component, OnInit } from '@angular/core';
import { areas } from './home.constant';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  areas = areas;
  logo = 'assets/images/brand.png';


  constructor() { }

  ngOnInit(): void {
  }

}
