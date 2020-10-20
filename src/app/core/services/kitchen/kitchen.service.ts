import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, interval } from 'rxjs';
import { Order, OrderStatus } from '../../definitions/order.model';
import { map, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KitchenService {
  orders: Observable<Order[]>;
  clock: Observable<Date>;

  constructor(private firestore: AngularFirestore) {
    this.orders = this.firestore.collection('pedidos').valueChanges() as Observable<Order[]>;
    this.clock = interval(1000).pipe(map(() => new Date()), share());
  }

  getAllOrders(): Observable<Order[]>  {
    return this.orders;
  }

  getClock(): Observable<Date> {
    return this.clock;
  }

  toDeliver(id: string): void {
    this.firestore.doc<Order>(`pedidos/${id}`).update({status: OrderStatus.toDeliver });
  }
}
