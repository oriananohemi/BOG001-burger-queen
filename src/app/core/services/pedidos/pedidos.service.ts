import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Order } from '../../definitions/order.model';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  orders: Observable<Order[]>;

  constructor(private firestore: AngularFirestore) {
    this.orders = this.firestore.collection('pedidos').valueChanges() as Observable<Order[]>;
  }

  getAllOrders(): Observable<Order[]>  {
    return this.orders;
  }
}
