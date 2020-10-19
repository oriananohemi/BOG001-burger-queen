import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/core/definitions/order.model';
import { OrderHistoryService } from '../../../core/services/order-history/order-history.service';

@Component({
  selector: 'app-order-active',
  templateUrl: './order-active.component.html',
  styleUrls: ['./order-active.component.scss']
})
export class OrderActiveComponent implements OnInit {
  @Input() order: Order;

  constructor(
    private orderHistoryService: OrderHistoryService
  ) { }

  ngOnInit(): void {
  }

  delivered(id: string) {
    this.orderHistoryService.delivered(id);
  }
}
