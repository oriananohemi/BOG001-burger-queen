import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Menu, Product } from '../../definitions/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  items: Observable<Product[]>;
  menu: Observable<Menu[]>;
  client = localStorage.getItem('client');
  waiter = localStorage.getItem('waiter');

  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('items').valueChanges() as Observable<Product[]>;
    this.menu = firestore.collection<Menu>('menu').valueChanges();
  }

  getAllProducts(): Observable<Product[]>  {
    return this.items;
  }

  getMenuType(): Observable<Menu[]> {
    return this.menu;
  }

  // getProduct(id: string) {
  //   return this.products.find(item => id === item.id);
  // }
}
