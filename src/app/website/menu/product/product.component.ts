import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../core/definitions/product.model';

import { CartService } from '../../../core/services/cart.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  status = '';

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  showOptions() {
    this.status = 'show';
  }

  hideOptions() {
    this.status = '';
  }
  addCart() {
    this.cartService.addCart(this.product);
  }

  optionProduct(option: string) {
  }
}
