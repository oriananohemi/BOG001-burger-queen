import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Menu, Product } from '../../definitions/product.model';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;
  let firestoreReference: AngularFirestore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductsService,
        {
          provide: AngularFirestore,
          useValue: {
            doc: () => ({
              update: jest.fn(),
            }),
            collection: () => ({
              valueChanges: () => of()
            }),
          }
        }
      ]
    });
    service = TestBed.inject(ProductsService);
    firestoreReference = TestBed.inject(AngularFirestore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Suite de prueba de la funcion getAllOrders', () => {
    it('Debe retornar el contenido de la variable', () => {
      const products: Observable<Product[]> = of([]);
      service.items$ = products;

      const result = service.getAllProducts();

      expect(result).toEqual(products);
    });
  });

  describe('Suite de prueba de la funcion getAllOrders', () => {
    it('Debe retornar el contenido de la variable', () => {
      const menu: Observable<Menu[]> = of([]);
      service.menu$ = menu;

      const result = service.getMenuType();

      expect(result).toEqual(menu);
    });
  });

});
