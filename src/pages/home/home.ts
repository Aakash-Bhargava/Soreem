import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	slides = [
    {
      title: "Slide 1",
      description: " <b>Bolded</b> blah blah blah ",
    },
    {
      title: "Slide 2",
      description: "<b>Ionic Framework</b> ",
    },
    {
      title: "Slide 3",
      description: "<b>Ionic Cloud</b>",
    }
  ];

  constructor(public navCtrl: NavController) {


  }




  goToProfilePage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(ProfilePage);
  	}

}
