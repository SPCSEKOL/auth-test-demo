import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
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
  component: DashboardComponent,
  canActivate: [authGuard]
}];
