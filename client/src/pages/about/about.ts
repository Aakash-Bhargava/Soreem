import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  aboutHeader = "be you. be bold. be Soreem.";
  aboutText = "Soreem officially launched March 26th 2016 by Founder and CEO, Amir Butler. She created Soreem to encourage individuals to live a 'carefree' lifestyle and her clothing reflects just that. Being Soreem means being comfortable with yourself and not allowing what anyone else has to say bother you. Even when it comes to your dreams or the way you want to live, being Soreem means doing you basically. Living for you and nobody else. That was Amir's main purpose with creating this brand because she felt like she couldn't be herself and not a lot of people understood her way of fashion and the way she wanted to live. She wanted some type of artistic outlet for herself and others... So therefore, Soreem is the voice for the voiceless.";
}
