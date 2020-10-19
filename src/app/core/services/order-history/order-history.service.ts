import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order, OrderStatus } from '../../definitions/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {
  waiterName = localStorage.getItem('waiter');

  orders$: Observable<Order[]>;

  constructor(private firestore: AngularFirestore) {
    this.orders$ = this.firestore.collection('pedidos').valueChanges() as Observable<Order[]>;
  }

  getAllOrdersActive(): Observable<Order[]>  {
    return this.orders$.pipe(
      map((orders) => orders.filter((order) => order.status === OrderStatus.toDeliver && order.waiter === this.waiterName))
    );
  }

  getAllOrders(): Observable<Order[]>  {
    return this.orders$.pipe(
      map((orders) => orders.filter((order) => order.status === OrderStatus.delivered && order.waiter === this.waiterName))
    );
  }

  delivered(id: string) {
    this.firestore.doc<Order>(`pedidos/${id}`).update({status: OrderStatus.delivered });
  }
}
