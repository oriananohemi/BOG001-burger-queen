import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    ProductComponent
  ]
})
export class WebsiteModule { }
