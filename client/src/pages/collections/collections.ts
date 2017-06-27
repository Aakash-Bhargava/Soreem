import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, ModalController } from 'ionic-angular';
import { ProductContentPage } from '../product-content/product-content';

@Component({
  selector: 'page-about',
  templateUrl: 'collections.html'
})
export class CollectionsPage {

  collection;
  products;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController,
              public params: NavParams, public modalCtrl: ModalController) {
    console.log("Collections");
    if(this.params.get('collection'))
    {
      this.collection = this.params.get('collection');
      this.products = this.collection.products;
    }
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

  openProductModal(product) {
     let modal = this.modalCtrl.create(ProductContentPage, {product: product});
     modal.present();
   }


}
