import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';
import { Angular2Apollo } from 'angular2-apollo';
import gql from 'graphql-tag';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class LoginPage{
  email = "";
  password = "";
  LoginInfo = <any>{};
  constructor(public navCtrl: NavController, public toastCtrl: ToastController,
  			   private apollo: Angular2Apollo) {
    }
  //calls the signIn function
  //if there is a token, it is set in localStorage
  //the Tabs Page is then pushed
  loginEvent(event){
    this.signIn().then(({data}) =>{
      if (data){
        this.LoginInfo.data = data;
        console.log(this.LoginInfo.data.signinUser.token);
        //this sets the user's auth token in localStorage so that they don't need to repeatedly log in
        window.localStorage.setItem('graphcoolToken', this.LoginInfo.data.signinUser.token);
      }
    }).then(() =>{
      this.navCtrl.push(TabsPage);
    }).catch(() => {
      console.log('view was not dismissed');
      this.showToast();
    });
  }


  showToast() {
    let toast = this.toastCtrl.create({
      message: 'Login failed, Please try again.',
      duration: 2500,
      position: 'bottom'
    });

    toast.present(toast);
  }

  //returns a promise that contains the user's auth token
  signIn(){
    return this.apollo.mutate({
      mutation: gql`
      mutation signinUser($email: String!,
                          $password: String!){
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

  goToSignupPage(){
  	this.navCtrl.push(SignupPage);
  }
}
