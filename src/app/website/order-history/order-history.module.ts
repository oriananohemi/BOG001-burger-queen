import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderHistoryRoutingModule } from './order-history-routing.module';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrderActiveComponent } from './order-active/order-active.component';
import { OrderCompletedComponent } from './order-completed/order-completed.component';


@NgModule({
  declarations: [OrderHistoryComponent, OrderActiveComponent, OrderCompletedComponent],
  imports: [
    CommonModule,
    OrderHistoryRoutingModule,
    SharedModule
  ]
})
export class OrderHistoryModule { }
