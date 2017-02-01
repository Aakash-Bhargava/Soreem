import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ProfilePage } from '../profile/profile';
import { SettingsPage } from '../settings/settings';
import { WishListPage } from '../wishlist/wishlist';
import { EventsPage } from '../events/events';
import { NewReleasePage } from '../new_release/newrelease';
import { SocialPage } from '../social/social';
import { LookBookPage } from '../lookbook/lookbook';
import { ShoppingBagPage } from '../shopbag/shopbag';
import { CollectionsPage } from '../collections/collections';
import { SalePage } from '../sale/sale';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  Home: any = HomePage;
  Profile: any = ProfilePage;
  WishList: any = WishListPage;
  Social: any = SocialPage;
  Events: any = EventsPage;
  LookBook: any = LookBookPage;
  NewRelease: any = NewReleasePage;
  ShoppingBag: any = ShoppingBagPage;
  Settings: any = SettingsPage;
  Collections: any = CollectionsPage;
  Sale: any = SalePage;
 



  constructor() {

  }
}
