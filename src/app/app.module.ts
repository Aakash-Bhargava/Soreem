import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LandingPage }  from '../pages/landing/landing';
import { SettingsPage } from '../pages/settings/settings';
import { WishListPage } from '../pages/wishlist/wishlist';
import { EventsPage } from '../pages/events/events';
import { NewReleasePage } from '../pages/new_release/newrelease';
import { SocialPage } from '../pages/social/social';
import { LookBookPage } from '../pages/lookbook/lookbook';
import { ShoppingBagPage } from '../pages/shopbag/shopbag';
import { CollectionsPage } from '../pages/collections/collections';
import { SalePage } from '../pages/sale/sale';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ProfilePage,
    HomePage,
    TabsPage,
    LandingPage,
    SettingsPage,
    WishListPage,
    EventsPage,
    NewReleasePage,
    SocialPage,
    LookBookPage,
    ShoppingBagPage,
    CollectionsPage,
    SalePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ProfilePage,
    HomePage,
    TabsPage,
    LandingPage,
    SettingsPage,
    WishListPage,
    EventsPage,
    NewReleasePage,
    SocialPage,
    LookBookPage,
    ShoppingBagPage,
    CollectionsPage,
    SalePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
