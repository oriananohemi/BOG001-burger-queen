import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KitchenComponent } from './kitchen/kitchen.component';
import { KitchenRoutingModule } from './kitchen-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [KitchenComponent, OrderComponent],
  imports: [KitchenRoutingModule, CommonModule, FormsModule, SharedModule],
})
export class KitchenModule {}
