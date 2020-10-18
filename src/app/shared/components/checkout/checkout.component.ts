import { Component, Inject, OnInit } from '@angular/core';

import { CartService } from '../../../core/services/cart.service';

import { Observable } from 'rxjs';
import { Product } from 'src/app/core/definitions/product.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  providers: [{provide: 'Window', useValue: window}]
})
export class CheckoutComponent implements OnInit {

  total$: Observable<number>;
  products$: Observable<Product[]>;
  status = '';
  client: string;
  request: string;

  constructor(
    private cartService: CartService,
    private router: Router,
    @Inject('Window') private readonly window: Window
  ) {
    this.client = this.cartService.client;
    this.products$ = this.cartService.products$;
    this.total$ = this.cartService.total$;
    }

  ngOnInit(): void {
    this.onResize(this.window);
  }

  showCheckout() {
    this.status = 'show';
  }

  hide() {
    this.status = '';
  }

  onResize(event) {
    const resolution = event.innerWidth;
    if (resolution >= 1020) {
      this.status = 'show';
    }
  }

  save() {
    this.cartService.addOrder()
    .then(() => {
      this.request = 'success';
    })
    .catch(() => this.request = 'error');
  }

  confirm() {
    localStorage.removeItem('client');
    this.router.navigate(['mesas']);
  }
}
