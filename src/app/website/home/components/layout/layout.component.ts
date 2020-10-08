import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  logo = 'assets/images/brand.png';
  nameClient = '';

  constructor() {}

  ngOnInit(): void {}

  clientSave() {
    if (this.nameClient !== '') {
      localStorage.setItem('client', this.nameClient);
    } else {
      console.log('esta vacio');
    }
  }
}
