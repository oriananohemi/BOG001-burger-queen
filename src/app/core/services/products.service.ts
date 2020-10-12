import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  items: Observable<any[]>;
  menu: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('items').valueChanges();
    this.menu = firestore.collection('menu').valueChanges();
  }

  getAllProducts() {
    return this.items;
  }

  getMenuType() {
    return this.menu;
  }

  // getProduct(id: string) {
  //   return this.products.find(item => id === item.id);
  // }
}
