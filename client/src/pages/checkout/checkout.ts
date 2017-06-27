import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

import { Stripe } from '@ionic-native/stripe';

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html'
})
export class CheckOutPage {
  cardinfo: any = {
    number: '',
    expMonth: '',
    expYear: '',
    cvc: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private stripe: Stripe) {
    this.stripe.setPublishableKey('pk_live_lBf9W8G3n0UCNUUIEHmZqNx5');

  }


  pay() {
  this.stripe.setPublishableKey('pk_test');
  this.stripe.createCardToken(this.cardinfo).then((token) => {
    var data = 'stripetoken=' + token + '&amount=50';
    var headers = new Headers();
    headers.append('Conent-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://localhost:3333/processpay', data, { headers: headers }).subscribe((res) => {
      if (res.json().success)
      alert('transaction Successfull!!')
    })
  })
}



}
