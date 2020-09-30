import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComidaComponent } from './components/comida/comida.component';
import { DesayunoComponent } from './components/desayuno/desayuno.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'desayuno',
    component: DesayunoComponent,
  },
  {
    path: 'comida',
    component: ComidaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
