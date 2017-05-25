import { Component } from '@angular/core';
import { App, MenuController, NavController, ModalController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ProfilePage } from '../profile/profile';
import { ProductContentPage } from '../product-content/product-content';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'page-product',
  templateUrl: 'products.html'
})
export class ProductsPage {
  //sets the product segment toggled 'all' as default
  products: string = "all";
  collections = <any>[];
  items = <any>[];

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController) {

       this.collections = [
        {
          name: 'Mes Racines',
          image: 'assets/Images/DestroyedFlagCrewneck.jpg'
        },
        {
          name: 'STAGE 1',
          image: 'assets/Images/ImatterTee.jpg'
        },
        {
          name: 'Acessories',
          image: 'assets/Images/SoreemSticker.jpeg'
        },
        {
          name: 'Birthday Collection',
          image: 'assets/Images/slide0.jpg'
        }
      ];


      this.items = [
        {
          name: 'Soreem Sticker',
          image: 'assets/Images/SoreemSticker.jpeg',
          price: '$2'
        }
      ]
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

  rootPage = "ProductsPage";

}
