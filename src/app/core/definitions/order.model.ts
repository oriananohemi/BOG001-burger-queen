export type ProductsOrder = {
  name: string;
  amount: number;
  option: string
}

export interface Order {
  id: string;
  name: string;
  waiter: string;
  observations: string;
  status: string;
  products: ProductsOrder[];
}