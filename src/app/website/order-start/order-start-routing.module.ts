import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderStartComponent } from './order-start/order-start.component';

const routes: Routes = [
  {
    path: '',
    component: OrderStartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderStartRoutingModule {}
