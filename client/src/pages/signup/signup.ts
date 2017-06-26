import { NavController, NavParams } from 'ionic-angular';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TabsPage } from '../tabs/tabs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Angular2Apollo } from 'angular2-apollo';
import { Subscription } from 'rxjs/Subscription';
import gql from 'graphql-tag';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  email = "";
  password = "";
  birthday = "";
  LoginInfo = <any>{};
  private signupForm : FormGroup;

  constructor(public navCtrl: NavController,  public formBuilder: FormBuilder, private apollo: Angular2Apollo) {
	  	this.signupForm = this.formBuilder.group({
      		email: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      		password: ['', Validators.compose([Validators.maxLength(30), Validators.minLength(5),
      					   Validators.required])],
          birthday: ['']
    });
    }

  //calls the createAndSignIn function
  //sets the auth token
  //pushes the Tabs Page
  signUpEvent(event) {
    this.createAndSignIn().then(({data}) => {
      if (data){
        this.LoginInfo.data = data
        console.log(this.LoginInfo.data.signinUser.token);
        window.localStorage.setItem('graphcoolToken', this.LoginInfo.data.signinUser.token);
      }
    });
    this.navCtrl.push(TabsPage)
  }

  //returns a promise that both creates the user and returns the user's auth token
  createAndSignIn(){
    return this.apollo.mutate({
      mutation: gql`
      mutation createUser($email: String!,
                          $password: String!){
        createUser(authProvider: {email: {email: $email, password: $password}}) {
          id
        }
        signinUser(email: {email: $email, password: $password}){
          token
        }
      }
      `,
      variables: {
        email: this.email,
        password: this.password
      }
    }).toPromise();
  }
}
