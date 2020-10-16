import { Component, OnInit } from '@angular/core';

import { CartService } from '../../../core/services/cart.service';

import { Observable } from 'rxjs';
import { Product } from 'src/app/core/definitions/product.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  total$: Observable<number>;
  products$: Observable<Product[]>;
  status = '';
  client: string;
  request: string;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {
    this.client = this.cartService.client;
    this.products$ = this.cartService.products$;
    this.total$ = this.cartService.total$;
    this.request = this.cartService.request;
   }

  ngOnInit(): void {
  }

  showCheckout() {
    this.status = 'show';
  }

  hideCheckout() {
    this.status = '';
  }

  onResize(event) {
    const resolution = event.target.innerWidth;
    if (resolution >= 1020) {
      this.status = 'show';
    }
  }

  save() {
    this.cartService.addOrder();
  }

  confirm() {
    this.router.navigate(['mesas']);
  }
}
