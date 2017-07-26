import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Angular2Apollo } from 'angular2-apollo';
import { Subscription } from 'rxjs/Subscription';
import gql from 'graphql-tag';
import 'rxjs/add/operator/toPromise';

import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'page-lookbook',
  templateUrl: 'lookbook.html'
})
export class LookBookPage {

  allProducts = <any>[];

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    private apollo: Angular2Apollo) {
  }

  ionViewDidEnter(){
    this.queryProducts().then(({data}) => {
      if(data){
        this.allProducts = data;
        console.log(this.allProducts);
        this.allProducts = this.allProducts.allProducts;
      }
    })
  }

	dismiss() {
    	this.viewCtrl.dismiss();
  	}

    queryProducts(){
      return this.apollo.mutate({
        mutation: gql`
        query{
          allProducts{
            id
            name
            price
            sizeable
            images
            available
            notes
            photoPath
          }
        }
        `
      }).toPromise();
    }
}
