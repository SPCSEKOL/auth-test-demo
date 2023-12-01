import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {authGuard} from "./guard/auth.guard";

export const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: LoginComponent
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'dashboard',
  loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent),
  canActivate: [authGuard]
}];
