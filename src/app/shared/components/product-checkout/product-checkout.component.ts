import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../core/definitions/product.model';

import { CartService } from '../../../core/services/cart/cart.service'

@Component({
  selector: 'app-product-checkout',
  templateUrl: './product-checkout.component.html',
  styleUrls: ['./product-checkout.component.scss']
})
export class ProductCheckoutComponent implements OnInit {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addCart() {
    this.cartService.addCart(this.product);
  }

  changeAmount() {
    this.cartService.changeAmount(this.product);
  }

  removeProduct() {
    this.cartService.removeProduct(this.product);
  }

}
