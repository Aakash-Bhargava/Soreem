import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import { EventsPage } from '../pages/events/events';
import { LoginPage } from '../pages/login/login';
import { WishListPage } from '../pages/wishlist/wishlist';
import { ProfilePage } from '../pages/profile/profile';
import { FaqPage } from '../pages/faq/faq';



@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage : any;

  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      if (window.localStorage.getItem('graphcoolToken') != null) {
        this.rootPage = TabsPage;
      } else {
      this.rootPage = LoginPage;
    }


      this.pages = [
      { title: 'Home', component: TabsPage },
      { title: 'Events', component: EventsPage},
      { title: 'Wishlist', component: WishListPage },
      { title: 'Profile', component: ProfilePage },
      { title: 'FAQ', component: FaqPage}
    ];

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
