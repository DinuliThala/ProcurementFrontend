import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ViewPurchaseOrderComponent} from './pages/view-purchase-order/view-purchase-order.component';
import {ViewBidsComponent} from './pages/view-bids/view-bids.component';
import {ViewReqComponent} from './pages/view-req/view-req.component';
import {AddBidsComponent} from './pages/add-bids/add-bids.component';
import {AddPayComponent} from './pages/add-pay/add-pay.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'view-purchase-order', component: ViewPurchaseOrderComponent},
  {path: 'view-bids', component: ViewBidsComponent},
  {path: 'add-pay', component: AddPayComponent },
  {path: 'view-req', component: ViewReqComponent},
  {path: 'add-bids', component: AddBidsComponent}
// { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
