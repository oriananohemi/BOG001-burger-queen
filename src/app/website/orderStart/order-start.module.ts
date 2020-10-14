import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrderStartRoutingModule } from './order-start-routing.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [OrderStartRoutingModule, CommonModule, FormsModule],
})
export class OrderStartModule {}
