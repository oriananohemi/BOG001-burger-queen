import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'mesas',
        loadChildren: () => import('./order-start/order-start.module').then(m => m.OrderStartModule),
      },
      {
        path: 'menu',
        loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule),
      },
      {
        path: 'cocina',
        loadChildren: () => import('./kitchen/kitchen.module').then(m => m.KitchenModule),
      },
      {
        path: 'pedidos',
        loadChildren: () => import('./order-history/order-history.module').then(m => m.OrderHistoryModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
