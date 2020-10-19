import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../core/definitions/product.model';

import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  status = '';
  option = '';

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

  setOption(option: string) {
    this.option = option;
  }

  addCart() {
    console.log(this.option)
    this.cartService.addCart(this.product, this.option);
  }
}
