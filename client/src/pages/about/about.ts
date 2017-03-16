import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  aboutHeader = "Live That Life Soreem was created back in March 2016 by Amir Butler, who currently is a student at Michigan State University. She had this idea during her freshman year of college and went for it.";
  aboutText = "Soreem is a streetwear brand meant to be an outlet for individuals to express their own voice and style through clothing. Soreem is defined to mean being 'carefree', whether its about your own life decisions, dreams, fashion sense, etc. Its way more than a movement, but a lifestyle Amir created for individuals who felt like they didn't have much of a voice or a way to express themselves through fashion. Be you. Be bold. Be Soreem.";
}
