import { Component } from '@angular/core';
import { App, MenuController, NavController, ModalController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ProfilePage } from '../profile/profile';
import { ProductContentPage } from '../product-content/product-content';


@Component({
  selector: 'page-product',
  templateUrl: 'products.html'
})
export class ProductsPage {
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  goToProfilePage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(ProfilePage);
  	}

 goToItemPage() {
 	this.navCtrl.push(ProfilePage);
 }

 openModal(characterNum) {
    let modal = this.modalCtrl.create(ProductContentPage, characterNum);
    modal.present();
  }

}
