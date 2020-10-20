import { TestBed } from '@angular/core/testing';

import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../../definitions/product.model';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CartService,
        {
          provide: AngularFirestore,
          useValue: {
            createId: () => 'id',
            // collection: () => ({
            //   doc: () => ({
            //     set: () => (
            //       new Promise((resolve) => resolve())
            //     )
            //   })
            // })
            collection: jest.fn()
          }
        }
      ]
    });

    service = TestBed.inject(CartService);
  });

  it('Deberia ser creado', () => {
    expect(service).toBeTruthy();
  });

  describe('Suite de prueba del metodo getTotal', () => {
    it('Debe retornar la suma de los precios de los productos enviados', () => {
      const products: Product[] = [
        {
          id: 'string',
          image: 'image',
          name: 'string',
          menu: 'string',
          amount: 3,
          price: 10
        },
        {
          id: 'string',
          image: 'image',
          name: 'string',
          menu: 'string',
          amount: 1,
          price: 20
        }
      ];

      const result = service.getTotal(products);

      expect(result).toBe(50);
    });
  });

  describe('Suite de prueba del metodo addCart', () => {
    it('Debe aumentar 1 la cantidad del producto, si el producto ya existe', (done) => {
      service['products'] = [{
        id: 'string',
        image: 'image',
        name: 'string',
        menu: 'string',
        amount: 2,
        price: 10
      }];

      const product: Product = {
          id: 'string',
          image: 'image',
          name: 'string',
          menu: 'string',
          price: 10
      };

      const productResult: Product = {
        id: 'string',
        image: 'image',
        name: 'string',
        menu: 'string',
        amount: 3,
        price: 10
      };

      service.addCart(product);

      service.products$.subscribe((products: Product[]) => {
        expect(products[0]).toEqual(productResult);
        done();
      });
    });

    it('Debe agregar el producto con cantidad 1, si no esta en la lista de productos', (done) => {
      const product: Product = {
        id: 'string',
        image: 'image',
        name: 'string',
        menu: 'string',
        price: 10
      };

      const productResult: Product = {
        id: 'string',
        image: 'image',
        name: 'string',
        menu: 'string',
        price: 10,
        amount: 1,
        option: ''
      };

      service.addCart(product);

      service.products$.subscribe((products: Product[]) => {
        expect(products[0]).toEqual(productResult);
        done();
      });
    });

    it('Debe agregar producto con cantidad 1 y opcion, si no esta en la lista de productos', (done) => {
      const product: Product = {
        id: 'string',
        image: 'image',
        name: 'string',
        menu: 'string',
        price: 10,
      };

      const productResult: Product = {
        id: 'string',
        image: 'image',
        name: 'string',
        menu: 'string',
        price: 10,
        amount: 1,
        option: 'option'
      };

      service.addCart(product, 'option');

      service.products$.subscribe((products: Product[]) => {
        expect(products[0]).toEqual(productResult);
        done();
      });
    });
  });

});
