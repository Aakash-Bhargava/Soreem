import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

import { Stripe } from '@ionic-native/stripe';
import { CardIO } from '@ionic-native/card-io';

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html'
})
export class CheckOutPage {
  cardImage = "assets/Images/credit-card.png";

  cardinfo: any = {
    type: '',
    number: '',
    expMonth: '',
    expYear: '',
    cvv: ''
  }

  card = {
    cardType: '',
    cardNumber: '',
    redactedCardNumber: '',
    expiryMonth: null,
    expiryYear: null,
    cvv: '',
    postalCode: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public cardIO: CardIO, private stripe: Stripe) {
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

scanCard() {
   this.cardIO.canScan()
     .then(
     (res: boolean) => {
       if (res) {
         let options = {
            scanExpiry: true,
            useCardIOLogo: true,
            scanInstructions: 'Please position your card inside the frame',
            keepApplicationTheme: true,
            requireCCV: true,
            requireExpiry: true,
            requirePostalCode: true
         };
         this.cardIO.scan(options).then(response => {
           console.log("Scan complete");
           console.log(response);
          //  let { cardType, cardNumber, redactedCardNumber, expiryMonth, expiryYear, cvv, postalCode } = response;
           this.card = {
             cardType: response['cardType'],
             cardNumber: response['cardNumber'],
             redactedCardNumber: response['redactedCardNumber'],
             expiryMonth: response['expiryMonth'],
             expiryYear: response['expiryYear'],
             cvv: response['cvv'],
             postalCode: response['postalCode']
           }
         });
       }
     });
 }



}
