import { Component, OnInit } from '@angular/core';

import { CartService } from '../../../core/services/cart.service';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/definitions/product.model';

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

  constructor(
    private cartService: CartService
  ) {
    this.client = this.cartService.client;
    this.products$ = this.cartService.cart$;
    this.total$ = this.products$
    .pipe(
      map((products: Product[]) => products.reduce((acc: number, { amount, price }: Product) => {
        return acc + (amount * price);
      }, 0
      ))
    );
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

}
