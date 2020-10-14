import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KitchenComponent } from './kitchen/kitchen.component';

@NgModule({
  declarations: [KitchenComponent, KitchenComponent],
  imports: [KitchenRoutingModule, CommonModule, FormsModule],
})
export class HomeModule {}
