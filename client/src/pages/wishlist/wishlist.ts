import { Component } from '@angular/core';
import { MenuController, NavController,
		 ModalController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'wishlist.html'
})
export class WishListPage {

  constructor(public navCtrl: NavController, public menu: MenuController,
  			  public modalCtrl: ModalController) {
    menu.enable(true); 
  }

   presentProfileModal() {
   let profileModal = this.modalCtrl.create(SettingsPage, { userId: 8675309 });
   profileModal.present();
 }



}