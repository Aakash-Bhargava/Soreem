import { Component } from '@angular/core';
import { ProductsPage } from '../products/products';
import { ContactPage } from '../contact/contact';
import { SettingsPage } from '../settings/settings';
import { AboutPage } from '../about/about';
import { LookBookPage } from '../lookbook/lookbook';
import { ShoppingBagPage } from '../shopbag/shopbag';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  Products: any = ProductsPage;
  About: any = AboutPage;
  Lookbook: any = LookBookPage;
  Contact: any = ContactPage;
  ShoppingBag: any = ShoppingBagPage;
  constructor() {}
}
