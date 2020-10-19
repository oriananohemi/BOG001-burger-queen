import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  waiterName = localStorage.getItem('waiter');
  schedule = localStorage.getItem('kitchen');
  logo = 'assets/images/brandLetter.png';

  constructor(public readonly router: Router) { }
}
