import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { Login } from './auth/login/login';
import { Order } from './components/order/order';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [ //first match wins
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // /
  { path: 'home', component: Home },
  { path: 'about-us', component: AboutUs },
  { path: 'login', component: Login },
  { path: 'order', component: Order },
  { path: '**', component: NotFound },//wildcard route
];
