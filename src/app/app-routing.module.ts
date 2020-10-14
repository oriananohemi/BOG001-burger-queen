import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./waiter/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'menu',
        loadChildren: () => import('./waiter/menu/menu.module').then(m => m.MenuModule),
      },
      {
        path: 'kitchen',
        loadChildren: () => import('./kitchen/kitchen.module').then(m => m.KitchenModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
