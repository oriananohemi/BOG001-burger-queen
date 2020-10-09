import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  menu = [
    {
      img: 'assets/images/cafeAmericano.jpg',
      title: 'Desayuno',
    },
    {
      img: 'assets/images/cafeAmericano.jpg',
      title: 'Comida',
    },
  ];

  client = localStorage.getItem('client');

  constructor() { }


  ngOnInit(): void {
  }

}
