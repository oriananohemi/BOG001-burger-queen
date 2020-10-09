import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../core/services/products.service';

import { Product } from '../../../../core/definitions/product.model';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  products: Product[];

  constructor(private productsService: ProductsService) {
    this.products = this.productsService.getAllProducts();
  }

  ngOnInit(): void {
  }

}
