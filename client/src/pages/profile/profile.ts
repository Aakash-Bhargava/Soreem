import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { FaqPage } from '../faq/faq';

import { Angular2Apollo } from 'angular2-apollo';
import { Subscription } from 'rxjs/Subscription'

import gql from 'graphql-tag';

import 'rxjs/add/operator/toPromise';



@Component({
  selector: 'page-contact',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  userInfo = <any>{};
  user = <any>{};
  email = "";
  password = "";
  firstName = "";
  lastName = "";

  constructor(public navCtrl: NavController, private apollo: Angular2Apollo) {

  }

  ionViewDidLoad() {
    this.setUser();
  }

  goToSettingsPage(){
  	 this.navCtrl.push(SettingsPage);
  }

  goToContactUsPage(){
  	this.navCtrl.push(ContactPage);
  }

  goToAboutUsPage(){
  	this.navCtrl.push(AboutPage);
  }

  goToFaqPage(){
  	this.navCtrl.push(FaqPage);
  }

  setUser(){
   this.checkUserInfo().then(({data}) => {
     if (data){
       this.userInfo = data;
       this.user = this.userInfo.user;
       this.email = this.user.email;
       this.firstName = this.user.firstName;
       this.lastName = this.user.lastName;
       console.log(this.userInfo);
       console.log(this.email);
     }
   })
 }

 //returns a promise containing the user's info
 checkUserInfo(){
   return this.apollo.query({
     query: gql`
       query{
         user{
           id
           email
           firstName
           lastName
           birthday
          }
         }
     `
   }).toPromise();
 }


}
