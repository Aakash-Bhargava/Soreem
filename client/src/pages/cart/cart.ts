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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentCart = window.localStorage.getItem('cart');
    this.currentCart = JSON.parse(this.currentCart);
    console.log(this.currentCart);
  }


}
