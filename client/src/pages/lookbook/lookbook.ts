import { Component } from '@angular/core';

import { NavController, ViewController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-lookbook',
  templateUrl: 'lookbook.html'
})
export class LookBookPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
  }

	dismiss() {
    	this.viewCtrl.dismiss();
  	}
}
