import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  logo = 'assets/images/brand.png';
  nameClient = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  clientSave() {
    if (this.nameClient !== '') {
      localStorage.setItem('client', this.nameClient);
      this.router.navigate(['menu']);
    } else {
      console.log('esta vacio');
    }
  }
}
