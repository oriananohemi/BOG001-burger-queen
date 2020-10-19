export interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
  description?: string;
  amount?: number;
  menu: string;
  submenu?: string;
  options?: string[];
  option?: string;
}

// export enum MenuType {
//   desayuno = 'desayuno',
//   dia = 'dia',
// }

export type MenuType = 'desayuno' |'dia';

export interface Menu {
  id: string;
  image: string;
  type: MenuType;
}
