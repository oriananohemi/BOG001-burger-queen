import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../core/definitions/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;
  @Output() addProduct: EventEmitter<Product> = new EventEmitter<Product>();

  status = '';
  option: string;

  showOptions() {
    this.status = 'show';
  }

  hideOptions() {
    this.status = '';
  }

  setOption(option: string) {
    this.option = option;
  }

  emitProduct() {
    this.product.option = this.option;
    this.addProduct.emit(this.product);
  }

}
