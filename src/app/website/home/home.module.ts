import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule
  ]
})
export class HomeModule { }
