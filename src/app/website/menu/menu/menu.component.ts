import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

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
