import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user = '';
  pass = '';
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  logIn() {
    this.authService.signInWithEmail(this.user, this.pass);
  }
}
