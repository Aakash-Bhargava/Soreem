import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CheckOutPage } from '../checkout/checkout';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  currentCart = <any>[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentCart = window.localStorage.getItem('cart');
    this.currentCart = JSON.parse(this.currentCart);
    console.log(this.currentCart);
  }

  goToCheckOut() {
    this.navCtrl.push(CheckOutPage);
  }


}
