import { Component } from '@angular/core';
import { NavParams, Platform, ViewController, AlertController } from 'ionic-angular';
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
    public viewCtrl: ViewController,
    public alertCtrl: AlertController
  ) {
    var products = [
      {
        name: 'Soreem Sticker',
        price: '2$',
        image: 'assets/Images/SoreemSticker.jpeg',
        collection: 'accessories'
      },
      {
        name: 'IMatter Tee',
        price: '20$',
        image: 'assets/Images/ImatterTee.jpg',
        collection: 'STAGE 1'
      },
      {
        name: 'Black Unity Vest',
        price: '90$',
        image: 'assets/Images/BlackUnityVest.jpg',
        collection: 'none'
      },
      {
        name: 'Soreem Joggers',
        price: '35$',
        image: 'assets/Images/SoreemJoggers.jpg',
        collection: 'Mes Racines'
      },
      {
        name: 'Destroyed Flag Crewneck',
        price: '45$',
        image: 'assets/Images/DestroyedFlagCrewneck.jpg',
        collection: 'Mes Racines'
      },
      {
        name: 'Flag Beanie',
        price: '15$',
        image: 'assets/Images/FlagBeanie.jpg',
        collection: 'none'
      }
    ];
    this.product = products[this.params.get('charNum')];
  }



  //Alert created when Size is chosen.
  doRadio() {
    let alert = this.alertCtrl.create({
    title: 'Size',
    inputs: [
      {
        type: 'radio',
        label: 'S',
        value: 'small'
      },
      {
        type: 'radio',
        label: 'M',
        value: 'medium'
      },
      {
        type: 'radio',
        label: 'L',
        value: 'large'
      },
      {
        type: 'radio',
        label: 'X',
        value: 'xlarge'
      }
    ],
    buttons : [
      {
        text: 'Cancel'
      },
      {
        text: 'Ok',
        handler: (data: any) => {
          console.log('Radio data:', data);
        }
      }
    ]
  });

  alert.present();
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

}
