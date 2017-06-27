import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Contact page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  currentCart = <any>[];
  total = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.currentCart = window.localStorage.getItem('cart');
    this.currentCart = JSON.parse(this.currentCart);
    this.total = 0;
    if (this.currentCart.length > 0) {
      for (let item of this.currentCart) {
        this.total += item.price;
      }
    }
    console.log(this.currentCart);
  }


}
