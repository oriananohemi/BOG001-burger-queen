import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CheckoutComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    CheckoutComponent
  ]
})
export class SharedModule { }
