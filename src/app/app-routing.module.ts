import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComidaComponent } from './components/comida/comida.component';
import { DesayunoComponent } from './components/desayuno/desayuno.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
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
  {
    path: 'pedidos',
    component: PedidosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
