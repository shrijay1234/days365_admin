// import { PopoverModule, WavesModule } from 'ng-uikit-pro-standard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxWebstorageModule } from "ngx-webstorage";
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { InterceptorService } from "./services/interceptor.service";
import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';
import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AddProductComponent } from './add-product/add-product.component';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { ProductListComponent } from './product-list/product-list.component';

import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';
import { BrandComponent } from './brand/brand.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { AddColorComponent } from './add-color/add-color.component';
import { AddSizeComponent } from './add-size/add-size.component';
import { ViewProductDetailComponent } from './view-product-detail/view-product-detail.component';

import { PromoterLoginComponent } from './promoter-login/promoter-login.component';
import {PromoterListComponent} from './promoter-list/promoter-list.component';
import{AddBankDetailComponent} from './add-bank-detail/add-bank-detail.component';

import { PromoterSidebarComponent } from './promoter-sidebar/promoter-sidebar.component';
//import { AppRoutingModule } from './app-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PromoterDashboardComponent } from './promoter-dashboard/promoter-dashboard.component';
import { PromocodeListComponent } from './promocode-list/promocode-list.component';


@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    SigninComponent,
    SignupComponent,
    AddProductComponent,
    ProductListComponent,
    CategoryComponent,
    AddCategoryComponent,
    SubCategoryComponent,
    AddSubCategoryComponent,
    BrandComponent,
    AddBrandComponent,
    ManageOrderComponent,
    AddColorComponent,
    AddSizeComponent,
    ViewProductDetailComponent,
    PromoterLoginComponent,
PromoterListComponent,
AddBankDetailComponent,
PromoterSidebarComponent,
ToolbarComponent,
PromoterDashboardComponent,
PromocodeListComponent,

 ],
  
  imports: [
    BrowserModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    MatDialogModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    RouterModule.forRoot(AppRoutes),

  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: InterceptorService
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
