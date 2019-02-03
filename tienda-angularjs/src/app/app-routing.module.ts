import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { ProductosComponent } from './productos/productos.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';

import { AuthGuardService } from './auth-guard.service';

const rutas: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent, canActivate: [AuthGuardService] },
  { path: 'carrito-compras', component: CarritoComprasComponent },
  { path: 'productos', component: ProductosComponent },
  { path: '**', component: NoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
