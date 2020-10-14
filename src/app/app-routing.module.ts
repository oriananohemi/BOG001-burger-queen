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
        loadChildren: () => import('./website/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'menu',
        loadChildren: () => import('./website/menu/menu.module').then(m => m.MenuModule),
      },
      {
        path: 'kitchen',
        loadChildren: () => import('./website/kitchen/kitchen.module').then(m => m.KitchenModule),
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
