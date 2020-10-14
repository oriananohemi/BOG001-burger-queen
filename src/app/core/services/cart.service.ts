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


  addCart(newProduct: Product, option?: string): void {
    const productIndex = this.products.findIndex(product => product.id === newProduct.id);
    if (productIndex !== -1) {
      this.products[productIndex].amount++;
    } else {
      newProduct.amount = 1;
      newProduct.option = option;
      this.products = [...this.products, newProduct];
    }
    this.cart.next(this.products);
  }

  changeAmount(product: Product): void {
    if (product.amount > 1) {
      product.amount--;
      this.cart.next(this.products);
    } else {
      this.removeProduct(product);
    }
  }

  removeProduct(oldProduct: Product): void {
    this.products = this.products.filter(product => product.id !== oldProduct.id);
    this.cart.next(this.products);
  }
}
