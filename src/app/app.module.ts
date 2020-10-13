import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { AddBidsComponent } from './pages/add-bids/add-bids.component';
import { AddAppComponent } from './pages/add-app/add-app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ViewBidsComponent } from './pages/view-bids/view-bids.component';
import { ViewPurchaseOrderComponent } from './pages/view-purchase-order/view-purchase-order.component';
import { ViewReqComponent } from './pages/view-req/view-req.component';
import { AddPayComponent } from './pages/add-pay/add-pay.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import {NzToolTipModule} from 'ng-zorro-antd/tooltip';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzUploadModule} from 'ng-zorro-antd/upload';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {NzTableModule} from 'ng-zorro-antd/table';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AddBidsComponent,
    AddAppComponent,
    LoginComponent,
    DashboardComponent,
    ViewBidsComponent,
    ViewPurchaseOrderComponent,
    ViewReqComponent,
    AddPayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzToolTipModule,
    NzSelectModule,
    NzCheckboxModule,
    NzButtonModule,
    NzUploadModule,
    NzDropDownModule,
    NzDatePickerModule,
    NzTableModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
