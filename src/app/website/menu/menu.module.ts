import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductComponent } from './product/product.component';
@NgModule({
  declarations: [
    MenuComponent,
    MenuListComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class MenuModule { }
