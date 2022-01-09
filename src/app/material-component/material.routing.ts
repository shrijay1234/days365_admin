
import { Routes } from '@angular/router';
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
import { DialogComponent } from './dialog/dialog.component';
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
import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ProductSecondApprovalComponent } from './product-second-approval/product-second-approval.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ProductFirstApprovalComponent } from './product-first-approval/product-first-approval.component';
import { BrandListingComponent } from './brand-listing/brand-listing.component';
import { AddTextPortComponent } from './add-text-port/add-text-port.component';
import { RegisterPromoterComponent } from './register-promoter/register-promoter.component';
import { ViewRegistrationPromoterComponent } from './view-registration-promoter/view-registration-promoter.component';
import { GeneratePromocodeComponent } from './generate-promocode/generate-promocode.component';

import { AddPromoterComponent } from './add-promoter/add-promoter.component';
import { SellerApprovalComponent } from './seller-approval/seller-approval.component';





export const MaterialRoutes: Routes = [
  
  {
    path: 'button',
    component: ButtonsComponent
  },
  {
    path: 'add-category',
    component: AddCategoryComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'grid',
    component: GridComponent
  },
  
  {
    path: 'lists',
    component: ListsComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'tabs',
    component: TabsComponent
  },
  {
    path: 'stepper',
    component: StepperComponent
  },
  {
    path: 'expansion',
    component: ExpansionComponent
  },
 
  {
    path: 'toolbar',
    component: ToolbarComponent
  },
  {
    path: 'progress-snipper',
    component: ProgressSnipperComponent
  },
  {
    path: 'progress',
    component: ProgressComponent
  },
  {
    path: 'dialog',
    component: DialogComponent
  },
  {
    path: 'tooltip',
    component: TooltipComponent
  },
  {
    path: 'snackbar',
    component: SnackbarComponent
  },
  {
    path: 'slider',
    component: SliderComponent
  },
  {
    path: 'slide-toggle',
    component: SlideToggleComponent
  },
 
{
  path: 'customers',
  component: CustomersComponent 
},
{
  path: 'order',
  component:  OrdersComponent
},
{
  path: 'payment',
  component: PaymentComponent
},  
{
  path: 'edit',
  component: EditprofileComponent
},
{
  path: 'view',
  component: ViewprofileComponent
},
{
  path: 'viewpass',
  component: ViewpassComponent 
},
{
  path: 'admin',
  component: AdminComponent
},
{path: 'product-second-approval',
component: ProductSecondApprovalComponent},

{path: 'view-product',
component:  ViewProductComponent},
{
  path: 'product-first-approval',
  component:  ProductFirstApprovalComponent
},
{path: 'brand-listing',
component:  BrandListingComponent },
{path: 'add-text-port',
component:  AddTextPortComponent },
{path: 'register-promoter',
component:RegisterPromoterComponent},
{
  path: 'view-register-promoter',
  component:ViewRegistrationPromoterComponent
},
{
  path: 'generate-promocode',
  component:GeneratePromocodeComponent
},

{
  path: 'add-promoter',
  component:AddPromoterComponent
},
{
  path:'seller-approval',
  component:SellerApprovalComponent
}

];

