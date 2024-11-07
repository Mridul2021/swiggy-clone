import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { CartComponent } from './cart/cart.component';
import { BurgerKingComponent } from './restraunt-menus/burger-king/burger-king.component';
import { DominosComponent } from './restraunt-menus/dominos/dominos.component';
import { KFCMenuComponent } from './restraunt-menus/kfc/kfc.component';
import { McDonaldsComponent } from './restraunt-menus/mc-donalds/mc-donalds.component';
import { VelloreKitchenComponent } from './restraunt-menus/vellore-kitchen/vellore-kitchen.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'menu/burgerking',
    component: BurgerKingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'menu/dominos',
    component: DominosComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'menu/kfc',
    component: KFCMenuComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'menu/mcdonalds',
    component: McDonaldsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'menu/vellore-kitchen',
    component: VelloreKitchenComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
