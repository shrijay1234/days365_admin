
import { AddColorComponent } from './add-color/add-color.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { BrandComponent } from './brand/brand.component';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryComponent } from './category/category.component';

import { Component } from '@angular/core';
import { ViewProductDetailComponent } from './view-product-detail/view-product-detail.component';
import { PromoterLoginComponent } from './promoter-login/promoter-login.component';


import { AddProductComponent } from './add-product/add-product.component';
import { Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { componentFactoryName } from '@angular/compiler';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { AddSizeComponent } from './add-size/add-size.component';
import { PromoterListComponent } from './promoter-list/promoter-list.component';
import { AddBankDetailComponent } from './add-bank-detail/add-bank-detail.component';
import { PromoterDashboardComponent} from './promoter-dashboard/promoter-dashboard.component';
import{ProductListComponent} from './product-list/product-list.component';

import { PromocodeListComponent } from './promocode-list/promocode-list.component';

export const AppRoutes: Routes = [

  {
    path: '',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path:'promoter-login',
    component: PromoterLoginComponent
  },
  {path:'promoter-list',
component:PromoterListComponent}

,{
  path:'add-bank-detail',
  component:AddBankDetailComponent
},
{
  path:'promocode-list',
  component:PromocodeListComponent
}
,
{path:'pro-list',
component:ProductListComponent},

{
  path:'promoter-dashboard',
  component:PromoterDashboardComponent
}
  ,
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'admin',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      
     
      {
        path: 'add-size',
        component: AddSizeComponent
      },
      {
        path: 'sub-category',
        component: SubCategoryComponent
      },
      {
        path: 'add-sub-category',
        component: AddSubCategoryComponent
      },

      {
        path: 'add-product',
        component: AddProductComponent
      },
      {
        path: 'add-color',
        component: AddColorComponent
      }
      ,
      
      {
        path: 'add-category',
        component: AddCategoryComponent
      },
      { 
        path: 'view-product-detail',
        component: ViewProductDetailComponent
      },
      {
        path: 'brand',
        component: BrandComponent
      },


      {
        path: 'manage-order',
        component: ManageOrderComponent
      },
      {
        path: 'add-brand',
        component: AddBrandComponent
      },
      

      {
        path: 'category',
        component: CategoryComponent
      },

      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];
