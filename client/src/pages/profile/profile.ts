import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { FaqPage } from '../faq/faq';



@Component({
  selector: 'page-contact',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {

  }

  goToSettingsPage(){
  	 this.navCtrl.push(SettingsPage);
  }

  goToContactUsPage(){
  	this.navCtrl.push(ContactPage);
  }

  goToAboutUsPage(){
  	this.navCtrl.push(AboutPage);
  }

  goToFaqPage(){
  	this.navCtrl.push(FaqPage);
  }

}
