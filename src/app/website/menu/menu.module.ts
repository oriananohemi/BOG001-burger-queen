import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  declarations: [
    LayoutComponent,
    MenuListComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
  ]
})
export class MenuModule { }
