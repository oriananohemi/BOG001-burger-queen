import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../../environments/environment';

import { ProductsService } from './services/products/products.service';
import { OrderHistoryService } from './services/order-history/order-history.service';
import { KitchenService } from './services/kitchen/kitchen.service';
import { CartService } from './services/cart/cart.service';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    ProductsService,
    OrderHistoryService,
    KitchenService,
    CartService,
    AuthService
  ]
})
export class CoreModule { }
