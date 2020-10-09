import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },
  {
    path: ':type',
    component: MenuListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
