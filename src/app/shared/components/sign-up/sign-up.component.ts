import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user: FormControl;
  pass: FormControl;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.user = new FormControl('', [Validators.required, Validators.email]);
    this.pass = new FormControl('', [Validators.required, Validators.minLength(6)]);
  }

  ngOnInit(): void {
  }

  logIn() {
    this.authService.signInWithEmail(this.user.value, this.pass.value)
    .then(() => {
      localStorage.setItem('waiter', this.user.value);
      this.router.navigate(['mesas']);
    })
  }
}
