import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: ':tipo',
    component: MenuListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
