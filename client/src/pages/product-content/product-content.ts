import { Component } from '@angular/core';
import { NavParams, Platform, ViewController, AlertController, ToastController } from 'ionic-angular';
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

  product: any;
  collection: any;
  currentCart = <any>[];
  newCart = <any>[];
  amount;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {
      this.amount = 0;
      this.currentCart = window.localStorage.getItem('cart');
      this.currentCart = JSON.parse(this.currentCart);
      console.log(this.currentCart);

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

  addToCart() {
    if (!this.currentCart) {
      this.newCart.push(this.product);
      window.localStorage.setItem('cart', JSON.stringify(this.newCart));
      let toast = this.toastCtrl.create({
        message: 'Item Added',
        duration: 3000,
        position: 'top'
      });
      toast.present();
      this.viewCtrl.dismiss();
      return;
    } else {
      for (let item of this.currentCart) {
        if (item.id == this.product.id) {
          let toast = this.toastCtrl.create({
            message: 'You already have this item in your cart!',
            duration: 3000,
            position: 'top'
          });
          toast.present();
          return;
        }
      }
    }
    this.currentCart.push(this.product);
    window.localStorage.setItem('cart', JSON.stringify(this.currentCart));
    let toast = this.toastCtrl.create({
      message: 'Item Added',
      duration: 3000,
      position: 'top'
    });
    toast.present();
    this.viewCtrl.dismiss();

  }


    increaseAmount(){
      console.log("increase");
      this.amount = this.amount + 1;
    }

    decreaseAmount(){
      if(this.amount > 0 ){
        this.amount = this.amount - 1;
      }
    }


}
