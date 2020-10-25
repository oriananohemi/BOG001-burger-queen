import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KitchenComponent } from './kitchen/kitchen.component';
import { KitchenRoutingModule } from './kitchen-routing.module';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    KitchenComponent,
    OrderComponent
  ],
  imports: [
    KitchenRoutingModule,
    CommonModule,
    FormsModule
  ],
})
export class KitchenModule {}
