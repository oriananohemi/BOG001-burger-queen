import { TestBed } from '@angular/core/testing';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { of } from 'rxjs';
import { Order } from '../../definitions/order.model';

import { OrderHistoryService } from './order-history.service';

describe('OrderHistoryService', () => {
  let service: OrderHistoryService;
  let firestoreReference: AngularFirestore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OrderHistoryService,
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
    service = TestBed.inject(OrderHistoryService);
    firestoreReference = TestBed.inject(AngularFirestore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Suite de prueba de la funcion getAllOrders', () => {
    it('Debe retornar un arreglo con los elementos que cumplan la condicion', (done) => {

      service.getAllOrders();

      service.orders$.subscribe((orders: Order[]) => {
        expect(orders.length).toBe(1);
        done();
      });
    });
  });
  describe('Suite de prueba de la funcion toDeliver', () => {
    it('Debe ejecutar la funcion doc con la referencia del documento y la funcion update con los datos a actualizar', () => {
      const update = jest.fn();
      jest.spyOn(firestoreReference, 'doc').mockReturnValue({update} as unknown as AngularFirestoreDocument<Order>);

      service.delivered('id');

      expect(firestoreReference.doc).toBeCalledWith('pedidos/id');
      expect(update).toBeCalledWith({status: 'entregado'});
    });
  });
});
