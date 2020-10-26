import { Component, Input } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';
import { Observable } from 'rxjs';

import { Product } from '../../../core/definitions/product.model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent {
  @Input() set menuType(type: string){
    this.products$ = this.productsService.getAllProducts()
    .pipe(
      map((products: Product[]) => products.filter((product) => product.menu === type && product.submenu !== 'extras')),
    );
  }

  products$: Observable<Product[]>;
  option = '';

  constructor(private productsService: ProductsService, private cartService: CartService) {}

  setOption(option: string) {
    this.option = option;
  }

  addCart(product: Product) {
    this.cartService.addCart(product, this.option);
  }
}
