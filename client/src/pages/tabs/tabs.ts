import { Component } from '@angular/core';
import { ProductsPage } from '../products/products';
import { ContactPage } from '../contact/contact';
import { SettingsPage } from '../settings/settings';
import { AboutPage } from '../about/about';
// import { LookBookPage } from '../lookbook/lookbook';
import { ShowsPage } from '../shows/shows';

import { CartPage } from '../cart/cart';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  Products: any = ProductsPage;
  About: any = AboutPage;
  Shows: any = ShowsPage;
  Contact: any = ContactPage;
  ShoppingBag: any = CartPage;
  constructor() {}
}
