import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/core/definitions/order.model';
import { KitchenService } from '../../../core/services/kitchen.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input() order: Order;

  constructor(
    private kitchenService: KitchenService
  ) { }

  ngOnInit(): void {
  }

  toDeliver(id: string) {
    this.kitchenService.toDeliver(id);
  }

}
