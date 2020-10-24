import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-start',
  templateUrl: './order-start.component.html',
  styleUrls: ['./order-start.component.scss'],
})
export class OrderStartComponent implements OnInit {
  logo = 'assets/images/brand.png';
  nameClient = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  clientSave() {
    if (this.nameClient !== '') {
      localStorage.setItem('client', this.nameClient);
      this.router.navigate(['menu']);
    } else {
      console.warn('esta vacio');
    }
  }
}
