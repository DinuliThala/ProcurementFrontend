import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ViewPurchaseOrderComponent} from './pages/view-purchase-order/view-purchase-order.component';
import {ViewBidsComponent} from './pages/view-bids/view-bids.component';
import {ViewReqComponent} from './pages/view-req/view-req.component';
import {AddBidsComponent} from './pages/add-bids/add-bids.component';
import {AddPayComponent} from './pages/add-pay/add-pay.component';
import {ProjectComponent} from './pages/project/project.component';
import {SupplierComponent} from './pages/supplier/supplier.component';
import {HomeComponent} from './pages/home/home.component';
import {CreatePurchaseOrderComponent} from './pages/create-purchase-order/create-purchase-order.component';
import {ViewSupplierComponent} from './pages/view-supplier/view-supplier.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: 'home',
    component: HomeComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'view-purchase-order', component: ViewPurchaseOrderComponent},
      {path: 'view-bids', component: ViewBidsComponent},
      {path: 'add-pay', component: AddPayComponent },
      {path: 'view-req', component: ViewReqComponent},
      {path: 'add-bids', component: AddBidsComponent},
      {path: 'project', component: ProjectComponent},
      {path: 'create-order', component: CreatePurchaseOrderComponent},
      {path: 'view-supplier', component: ViewSupplierComponent}
    ],
  },
  {path: 'supplier', component: SupplierComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
