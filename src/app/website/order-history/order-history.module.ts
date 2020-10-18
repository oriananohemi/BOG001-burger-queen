import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderHistoryRoutingModule } from './order-history-routing.module';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [OrderHistoryComponent],
  imports: [
    CommonModule,
    OrderHistoryRoutingModule,
    SharedModule
  ]
})
export class OrderHistoryModule { }
