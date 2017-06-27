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
  collection;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController
  ) {
      if(this.params.get('collection')){
        this.collection = this.params.get('collection');
        console.log(this.product);
      }

      if(this.params.get('product'))
      {
        this.product = this.params.get('product');
        console.log(this.product);
      }



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
