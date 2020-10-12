import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Product } from '../definitions/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Product[] = [];

  private cart = new BehaviorSubject<Product[]>([]);
  cart$: Observable<Product[]> = this.cart.asObservable();

  constructor() { }


  addCart(newProduct: Product): void {
    const productIndex = this.products.findIndex(product => product.id === newProduct.id);
    if (productIndex !== -1) {
      this.products[productIndex].amount++;
    } else {
      newProduct.amount = 1;
      this.products = [...this.products, newProduct];
    }
    this.cart.next(this.products);
  }
}
