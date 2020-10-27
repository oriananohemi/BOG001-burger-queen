import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-start',
  templateUrl: './order-start.component.html',
  styleUrls: ['./order-start.component.scss'],
})
export class OrderStartComponent {
  logo = 'assets/images/brand.png';

  clientField: FormControl;

  constructor(private router: Router) {
    this.clientField = new FormControl('', [Validators.required]);
  }

  clientSave() {
    if (this.clientField.valid) {
      localStorage.setItem('client', this.clientField.value);
      this.router.navigate(['menu']);
    }
  }
}
