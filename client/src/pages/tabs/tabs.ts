import { Component } from '@angular/core';
import { ProductsPage } from '../products/products';
import { ProfilePage } from '../profile/profile';
import { SettingsPage } from '../settings/settings';
import { WishListPage } from '../wishlist/wishlist';
import { LookBookPage } from '../lookbook/lookbook';
import { ShoppingBagPage } from '../shopbag/shopbag';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  Products: any = ProductsPage;
  Lookbook: any = LookBookPage;
  WishList: any = WishListPage;
  Profile: any = ProfilePage;
  ShoppingBag: any = ShoppingBagPage;
  constructor() {}
}
