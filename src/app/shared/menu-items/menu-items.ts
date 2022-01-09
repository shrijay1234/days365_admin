import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },
  {
    state: 'brand-listing',
    type: 'link',
    name: 'Brand Listing',
    icon: 'view_list'
  },

  {
    state: 'product-first-approval',
    type: 'link',
    name: 'Product First Approval',
    icon: 'verified_user'
  },
  {
    state: 'product-second-approval',
    type: 'link',
    name: 'Product Second Approval',
    icon: 'verified_user'
  },
  {
    state: 'add-text-port',
    type: 'link',
    name: 'Add Text port',
    icon: 'verified_user'
  },
  {
    state: 'register-promoter',
    type: 'link',
    name: 'Promoter Register',
    icon: 'perm_contact_calendar'
  },
  
  {
    state: 'generate-promocode',
    type: 'link',
    name: 'Generate Promocode',
    icon: 'perm_contact_calendar'
  },

   {
    state: 'seller-approval',
    type: 'link',
    name: 'Seller Approval',
    icon: 'perm_contact_calendar'
  },
  
  { state: 'customers', type: 'link', name: 'Customers', icon: 'supervised_user_circle'},
  { state: 'vendors', type: 'link', name: 'Vendor', icon: 'supervised_user_circle'},
  { state: 'category', name: 'Category', type: 'link', icon: 'av_timer' },
  {
    state: 'admin',
    type: 'link',
    name: 'Admin',
    icon: 'perm_identity'
  },
 
  {
    state: 'order',
    type: 'link',
    name: 'Orders',
    icon: 'shopping_cart'
  },
  {
    state: 'service',
    type: 'link',
    name: 'Service',
    icon: 'list_alt'
  },
  {
    state: 'payment',
    type: 'link',
    name: 'Payment',
    icon: 'payment'
  },
  { state: 'button', type: 'link', name: 'Buttons', icon: 'crop_7_5' },
  { state: 'grid', type: 'link', name: 'Grid List', icon: 'view_comfy' },
  { state: 'lists', type: 'link', name: 'Lists', icon: 'view_list' },
  { state: 'menu', type: 'link', name: 'Menu', icon: 'view_headline' },
  { state: 'tabs', type: 'link', name: 'Tabs', icon: 'tab' },
  { state: 'stepper', type: 'link', name: 'Stepper', icon: 'web' },
  {
    state: 'expansion',
    type: 'link',
    name: 'Expansion Panel',
    icon: 'vertical_align_center'
  },
  { state: 'chips', type: 'link', name: 'Chips', icon: 'vignette' },
  { state: 'toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail' },
  {
    state: 'progress-snipper',
    type: 'link',
    name: 'Progress snipper',
    icon: 'border_horizontal'
  },
  {
    state: 'progress',
    type: 'link',
    name: 'Progress Bar',
    icon: 'blur_circular'
  },
  {
    state: 'dialog',
    type: 'link',
    name: 'Dialog',
    icon: 'assignment_turned_in'
  },
  { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' },
  { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
  { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
  {
    state: 'slide-toggle',
    type: 'link',
    name: 'Slide Toggle',
    icon: 'all_inclusive'
  }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
