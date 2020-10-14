import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KitchenComponent } from './kitchen/kitchen.component';
import { KitchenRoutingModule } from './kitchen-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [KitchenComponent],
  imports: [KitchenRoutingModule, CommonModule, FormsModule, SharedModule],
})
export class KitchenModule {}
