import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { SettingsPage } from '../settings/settings';
import { WishListPage } from '../wishlist/wishlist';
import { SocialPage } from '../social/social';
import { ShoppingBagPage } from '../shopbag/shopbag';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  Home: any = HomePage;
  Social: any = SocialPage;
  WishList: any = WishListPage;
  Profile: any = ProfilePage;
  ShoppingBag: any = ShoppingBagPage;
  constructor() {}
}
