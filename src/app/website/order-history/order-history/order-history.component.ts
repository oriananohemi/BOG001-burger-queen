import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/definitions/order.model';
import { OrderHistoryService } from '../../../core/services/order-history/order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  orders$: Observable<Order[]>;
  ordersActive$: Observable<Order[]>;

  constructor( private orderHistoryService: OrderHistoryService) { }

  ngOnInit(): void {
    this.orders$ = this.orderHistoryService.getAllOrders();
    this.ordersActive$ = this.orderHistoryService.getAllOrdersActive();
  }

}
