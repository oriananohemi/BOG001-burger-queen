import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KitchenService {
  orders: Observable<Product[]>;

  constructor(firestore: AngularFirestore) {
    this.orders = firestore.collection('pedidos').valueChanges() as Observable<Product[]>;
  }

  getAllOrders(): Observable<Product[]>  {
    return this.orders;
  }
}
