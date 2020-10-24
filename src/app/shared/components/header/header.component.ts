import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  waiterName = localStorage.getItem('waiter');
  schedule = localStorage.getItem('kitchen');
  logo = 'assets/images/brandLetter.png';

  constructor(
    public readonly router: Router,
    private authService: AuthService
    ) { }

    logIn() {
      this.authService.login();
    }

    logOut() {
      this.authService.logout();
    }
}
