import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { WebsiteModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    MenuComponent,
    MenuListComponent,
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    WebsiteModule
  ]
})
export class MenuModule { }
