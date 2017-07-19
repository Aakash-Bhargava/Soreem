import { Component } from '@angular/core';
import { App, MenuController, NavController, ModalController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ProfilePage } from '../profile/profile';
import { ProductContentPage } from '../product-content/product-content';
import { CollectionsPage } from '../collections/collections';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';
import { Subscription } from 'rxjs/Subscription';
import gql from 'graphql-tag';
import 'rxjs/add/operator/toPromise';

import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'page-product',
  templateUrl: 'products.html'
})
export class ProductsPage {
  //sets the product segment toggled 'all' as default
  productView: string = "all";
  allProducts = <any>[];
  allAvailable = <any>[];
  collections = <any>[];
  items = <any>[];

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    private apollo: Angular2Apollo,
    public _DomSanitizer: DomSanitizer) {
      this.loadProducts();
      this.loadCollections();
    }

    ionViewDidEnter(){

    }

    loadCollections() {
      this.queryCollections().then(({data}) => {
        if (data){
          this.collections = data
          this.collections = this.collections.allCollections;
          console.log(this.collections);
        }
      });
    }

    //returns a promise that both creates the user and returns the user's auth token
    queryCollections(){
      return this.apollo.mutate({
        mutation: gql`
          query{
            allCollections{
              name
              image
              products {
                id
                name
                price
                images
                sizeable
                available
                photoPath
              }
            }
          }
        `
      }).toPromise();
    }

    loadProducts(){
      this.queryProducts().then(({data}) => {
        if (data){
          this.allProducts = data;
          this.allProducts = this.allProducts.allProducts;
          for(let product of this.allProducts){
            if(product.available){
              this.allAvailable.push(product);
            }
          }
        }
      });

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

  goToProfilePage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(ProfilePage);
  	}

 goToItemPage() {
 	this.navCtrl.push(ProfilePage);
 }

 openProductModal(product) {
    console.log(product);
    let modal = this.modalCtrl.create(ProductContentPage, {product: product});
    modal.present();
  }

  openCollectionModal(collection){
    console.log(collection);
    let modal = this.modalCtrl.create(CollectionsPage, {collection: collection});
    modal.present();
  }

  rootPage = "ProductsPage";

}
