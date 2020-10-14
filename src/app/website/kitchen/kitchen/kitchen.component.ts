import { Component, OnInit } from '@angular/core';
import { KitchenService }from '../../../core/services/kitchen.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit {
  orders: Observable<Product[]>;

  constructor(private kitchenService: KitchenService) { }

  ngOnInit(): void {
    this.orders = this.kitchenService.getAllOrders()
    .pipe(
      map((orders) => orders.filter((order) => order.status === 'preparando'))
    )
  }

}
