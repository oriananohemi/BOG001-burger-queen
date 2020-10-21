import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductCheckoutComponent } from './product-checkout/product-checkout.component';
@NgModule({
  declarations: [
    MenuComponent,
    MenuListComponent,
    ProductComponent,
    CheckoutComponent,
    ProductCheckoutComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class MenuModule { }
