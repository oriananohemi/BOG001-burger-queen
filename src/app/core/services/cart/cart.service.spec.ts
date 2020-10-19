import { TestBed } from '@angular/core/testing';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireStorageModule
      ],
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
});
