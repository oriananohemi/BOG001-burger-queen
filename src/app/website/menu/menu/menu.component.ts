import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../core/services/products/products.service';
import { Observable } from 'rxjs';

import { Menu } from '../../../core/definitions/product.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu: Observable<Menu[]>;

  client: string;

  constructor(private productsService: ProductsService) {
    this.client = this.productsService.client;
  }


  ngOnInit(): void {
    this.menu = this.productsService.getMenuType();
  }

}
