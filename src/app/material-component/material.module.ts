
import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialRoutes } from './material.routing';
import { ButtonsComponent } from './buttons/buttons.component';
import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import {
  DialogComponent,
  DialogOverviewExampleDialogComponent
} from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentComponent } from './payment/payment.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { AdminComponent } from './admin/admin.component';
import { ViewpassComponent } from './viewpass/viewpass.component';
import { VendorsComponent } from './vendors/vendors.component';
import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ProductSecondApprovalComponent } from './product-second-approval/product-second-approval.component';
import { ViewProductComponent } from './view-product/view-product.component'
import { ProductFirstApprovalComponent } from './product-first-approval/product-first-approval.component';
import { BrandListingComponent } from './brand-listing/brand-listing.component';
import { AddTextPortComponent } from './add-text-port/add-text-port.component';
import { RegisterPromoterComponent } from './register-promoter/register-promoter.component';
import { ViewRegistrationPromoterComponent } from './view-registration-promoter/view-registration-promoter.component';
import { GeneratePromocodeComponent } from './generate-promocode/generate-promocode.component';

import { AddPromoterComponent } from './add-promoter/add-promoter.component';
import { SellerApprovalComponent } from './seller-approval/seller-approval.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule
  ],
  providers: [],
  entryComponents: [DialogOverviewExampleDialogComponent],
  declarations: [
    ButtonsComponent,
    GridComponent,
    ListsComponent,
    MenuComponent,
    TabsComponent,
    StepperComponent,
    ExpansionComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    ProgressComponent,
    DialogComponent,
    DialogOverviewExampleDialogComponent,
    TooltipComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent,
    CustomersComponent,
    OrdersComponent,
    PaymentComponent,
    EditprofileComponent,
    ViewprofileComponent,
    AdminComponent,
    ViewpassComponent,
    VendorsComponent,
    CategoryComponent,
    AddCategoryComponent,
    ProductSecondApprovalComponent,
    ViewProductComponent,
    ProductFirstApprovalComponent, 
    BrandListingComponent,
     RegisterPromoterComponent,
     AddTextPortComponent,
     ViewRegistrationPromoterComponent,
     GeneratePromocodeComponent,
     
     AddPromoterComponent,
     
     SellerApprovalComponent 
  ]
})
export class MaterialComponentsModule {}
