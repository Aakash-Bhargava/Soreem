import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-returnPolicy',
  templateUrl: 'returnPolicy.html'
})
export class ReturnPolicyPage {
  returnPolicy = "You have 30 days to return and/or exchange any item(s). You must include the original receipt with the item returned to us in the shape they were given to you. If there is any noticeable damage or wear on any items then a return or exchange will not be granted. All of the information given to this application for payments is confidential. Live that Life Soreem does not give any information to a third party";
  constructor(public navCtrl: NavController) {

  }

}
