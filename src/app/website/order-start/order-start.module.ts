import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrderStartRoutingModule } from './order-start-routing.module';
import { OrderStartComponent } from './order-start/order-start.component';

@NgModule({
  declarations: [OrderStartComponent],
  imports: [OrderStartRoutingModule, CommonModule, FormsModule],
})
export class OrderStartModule {}
