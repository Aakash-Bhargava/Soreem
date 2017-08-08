import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-show-content',
  templateUrl: 'show-content.html'
})
export class ShowContentPage {

  show;
  products;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController,
              public params: NavParams, public modalCtrl: ModalController) {
    console.log("Show");
    if(this.params.get('show'))
    {
      this.show = this.params.get('show');
      console.log(this.show);
    }
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

}
