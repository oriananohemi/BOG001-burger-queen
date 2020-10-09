import { Injectable } from '@angular/core';

import { Product } from '../definitions/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/cafe.jpg',
      title: 'Cafe',
      price: 10,
      description: 'bla bla bla',
      amount: 0
    }
  ];


  getAllProducts() {
    return this.products;
  }

  getProduct(id: string) {
    return this.products.find(item => id === item.id);
  }

  constructor() { }
}
