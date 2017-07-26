import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-shipping',
  templateUrl: 'shipping.html'
})
export class ShippingPage {
  shippingText = " At Live That Life Soreem we ship orders from United States Postal Service. Please allow 1-2 business days to process. All of the orders will take 3-5 business days to ship out. Saturdays and Sundays are not included as business days. If international, you will be charged $20.00 for shipping. Canada orders will be charged $10.00 shipping.";
  constructor(public navCtrl: NavController) {
  }

}
