import { Product } from './product.model';

export enum OrderStatus {
  preparing = 'preparando',
  toDeliver = 'para entregar',
  delivered = 'entregado'
}

// export type OrderStatus = 'preparando' | 'para entregar' | 'entregado';

export interface Order {
  id?: string;
  name: string;
  waiter: string;
  observations?: string;
  status: OrderStatus;
  productsArray: Product[];
  total: number;
  date: Date;
}
