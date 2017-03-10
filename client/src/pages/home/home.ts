import { Component } from '@angular/core';
import { App, MenuController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ProfilePage } from '../profile/profile';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }

  goToProfilePage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(ProfilePage);
  	}

}
