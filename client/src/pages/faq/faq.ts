import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Faq page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html'
})
export class FaqPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqPage');
  }

  FaqHeader = "FAQ";
  question1 = "How long does shipping usually take?";
  answer1 = "Please allow 24 hours to process the hour, 3-5 business days. (Do not count Saturdays or Sundays)";

  question2 = "What is Soreem's return policy?";
  answer2 = "The item (s) have to be sent back within 30 days. Soreem will not except any returned clothing that is damaged unless it was sent damaged.";

  question3 = "How will I know the status of my order?"
  answer3 = "You will receive an email from Soreem letting you know your tracking number as soon as your items are sent by USPS.";

  question4 = "Does Soreem ship internationally?"
  answer4 = "Yes."

  question5 = "What if my package does not come within 3-5 business days?";
  answer5 = "If there are any complications with your order you will be notified immediately and accommodated for that problem.";
}
