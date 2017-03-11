import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ProfilePage } from '../pages/profile/profile';
import { ProductsPage } from '../pages/products/products';
import { ProductContentPage } from '../pages/product-content/product-content';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage }  from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import { WishListPage } from '../pages/wishlist/wishlist';
import { EventsPage } from '../pages/events/events';
import { NewReleasePage } from '../pages/new_release/newrelease';
import { SocialPage } from '../pages/social/social';
import { LookBookPage } from '../pages/lookbook/lookbook';
import { ShoppingBagPage } from '../pages/shopbag/shopbag';
import { CollectionsPage } from '../pages/collections/collections';
import { SalePage } from '../pages/sale/sale';
import { ContactPage } from '../pages/contact/contact';
import { SignupPage } from '../pages/signup/signup';
import { ApolloModule } from 'angular2-apollo';
import { provideClient } from './client';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ProfilePage,
    ProductsPage,
    ProductContentPage,
    TabsPage,
    LoginPage,
    SettingsPage,
    WishListPage,
    EventsPage,
    NewReleasePage,
    SocialPage,
    LookBookPage,
    ShoppingBagPage,
    CollectionsPage,
    SalePage,
    ContactPage,
    SignupPage
  ],
  imports: [
    ApolloModule.withClient(provideClient),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ProfilePage,
    ProductsPage,
    ProductContentPage,
    TabsPage,
    LoginPage,
    SettingsPage,
    WishListPage,
    EventsPage,
    NewReleasePage,
    SocialPage,
    LookBookPage,
    ShoppingBagPage,
    CollectionsPage,
    SalePage,
    ContactPage,
    SignupPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
