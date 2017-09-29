import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { WishListPage } from '../pages/wishlist/wishlist';
import { ProfilePage } from '../pages/profile/profile';
import { FaqPage } from '../pages/faq/faq';
import { AboutPage } from '../pages/about/about';
import { ShowsPage } from '../pages/shows/shows';
import { ContactPage } from '../pages/contact/contact';
import { ShippingPage } from '../pages/shipping/shipping';
import { ReturnPolicyPage } from '../pages/returnPolicy/returnPolicy';
import { FemaleCampaignPage } from '../pages/femaleCampaign/femaleCampaign';




@Component({
  selector: 'page-menu',
  templateUrl: 'app.html'
})


export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage : any;

  pages: Array<{title: string, component: any, icon: string}>;

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
      { title: 'Home', component: TabsPage , icon: 'home'},
      { title: 'About', component: AboutPage, icon: 'information-circle'},
      { title: 'Shows', component: ShowsPage, icon: 'calendar'},
      { title: 'Shipping', component: ShippingPage, icon: 'person'},
      { title: 'Return Policy', component: ReturnPolicyPage, icon:'filing'},
      // { title: 'Female Campaign', component: FemaleCampaignPage, icon: 'person'},
      { title: 'FAQ', component: FaqPage, icon:'help-circle'},

      // { title: 'Contact Us', component: ContactPage, icon:'mail'}
    ];

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
