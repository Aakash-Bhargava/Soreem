import { Component } from '@angular/core';
import { NavParams, Platform, ViewController } from 'ionic-angular';
import { ProductsPage } from '../products/products';


/*
  Generated class for the ProductContent page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-content',
  templateUrl: 'product-content.html'
})
export class ProductContentPage {

  product;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var products = [
      {
        name: 'Soreem Sticker',
        price: '2$',
        image: 'assets/Images/SoreemSticker.jpeg'
      },
      {
        name: 'IMatter Tee',
        price: '20$',
        image: 'assets/Images/ImatterTee.jpg'
      },
      {
        name: 'Black Unity Vest',
        price: '90$',
        image: 'assets/Images/BlackUnityVest.jpg'
      },
      {
        name: 'Soreem Joggers',
        price: '35$',
        image: 'assets/Images/SoreemJoggers.jpg'
      },
      {
        name: 'Destroyed Flag Crewneck',
        price: '45$',
        image: 'assets/Images/DestroyedFlagCrewneck.jpg'
      },
      {
        name: 'Flag Beanie',
        price: '15$',
        image: 'assets/Images/FlagBeanie.jpg'
      }
    ];
    this.product = products[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
