import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';
import { Observable } from 'rxjs';

import { Product } from '../../../core/definitions/product.model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  @Input() product: Product;

  products$: Observable<Product[]>;
  cartService: any;
  option = '';

  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const type = this.activatedRoute.snapshot.paramMap.get('type');
    this.products$ = this.productsService.getAllProducts()
    .pipe(
      map((products: Product[]) => products.filter((product) => product.menu === type && product.submenu !== 'extras')),
    );
  }

  setOption(option: string) {
    this.option = option;
  }

  addCart() {
    this.cartService.addCart(this.product, this.option);
  }
}
