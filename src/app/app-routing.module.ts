import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
      {
        path: '',
        loadChildren: () => import('./website/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'menu',
        loadChildren: () => import('./website/menu/menu.module').then(m => m.MenuModule),
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
