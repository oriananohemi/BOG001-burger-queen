import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/core/definitions/order.model';

@Component({
  selector: 'app-order-completed',
  templateUrl: './order-completed.component.html',
  styleUrls: ['./order-completed.component.scss']
})
export class OrderCompletedComponent implements OnInit {
  @Input() order: Order;

  constructor() { }

  ngOnInit(): void {
  }

}
