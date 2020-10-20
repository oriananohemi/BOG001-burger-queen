import { TestBed } from '@angular/core/testing';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { Observable, of } from 'rxjs';
import { Order } from '../../definitions/order.model';

import { KitchenService } from './kitchen.service';

describe('KitchenService', () => {
  let service: KitchenService;
  let firestoreReference: AngularFirestore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        KitchenService,
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
    service = TestBed.inject(KitchenService);
    firestoreReference = TestBed.inject(AngularFirestore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Suite de prueba de la funcion getAllOrders', () => {
    it('Debe retornar el contenido de la variable', () => {
      const orders: Observable<Order[]> = of([]);
      service.orders = orders;

      const result = service.getAllOrders();

      expect(result).toEqual(orders);
    });
  });
  
  describe('Suite de prueba de la funcion getClock', () => {
    it('Debe retornar el contenido de la variable', () => {
      const clock: Observable<Date> = of(new Date());
      service.clock = clock;

      const result = service.getClock();

      expect(result).toEqual(clock);
    });
  });

  describe('Suite de prueba de la funcion toDeliver', () => {
    it('Debe ejecutar la funcion doc con la referencia del documento y la funcion update con los datos a actualizar', () => {
      const update = jest.fn();
      jest.spyOn(firestoreReference, 'doc').mockReturnValue({update} as unknown as AngularFirestoreDocument<Order>);

      service.toDeliver('id');

      expect(firestoreReference.doc).toBeCalledWith('pedidos/id');
      expect(update).toBeCalledWith({status: 'para entregar'});
    });
  });
});
