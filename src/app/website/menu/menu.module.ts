import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';


@NgModule({
  declarations: [
    LayoutComponent,
    MenuListComponent,
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
  ]
})
export class MenuModule { }
