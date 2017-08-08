import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-show-content',
  templateUrl: 'show-content.html'
})
export class ShowContentPage {

  show;
  products;
  altName: any;
  showPics: any;

  alphaPhiAlphaShow = ['alphaPhiAlphaShow/7kR97sx.jpg', 'alphaPhiAlphaShow/7VJlYx3.png',
  'alphaPhiAlphaShow/alphaPhiAlphaShow.jpg',
  'alphaPhiAlphaShow/f4YtJWl.jpg', 'alphaPhiAlphaShow/W9REgkV.jpg'];

  msuFashionWeek = ['msuFashionWeek/4yvpLdD.jpg','msuFashionWeek/6FnoSJb.jpg', 'msuFashionWeek/7v8aXkj.jpg',
  'msuFashionWeek/deysPx5.jpg','msuFashionWeek/GVD6n7Y.jpg','msuFashionWeek/hH75xCO.jpg','msuFashionWeek/lVjaYAz.jpg',
  'msuFashionWeek/msuFashionWeek.jpg','msuFashionWeek/nnqwsxD.jpg', 'msuFashionWeek/PmhODrS.jpg',
  'msuFashionWeek/PmhODrS.jpg', 'msuFashionWeek/TYMCOZ5.jpg', 'msuFashionWeek/WHcSjwr.jpg',
  'msuFashionWeek/YkFlrEt.jpg'];

  walkFashionShow = ['walkFashionShow/2w0piz8.jpg', 'walkFashionShow/2ZspLfa.jpg', 'walkFashionShow/8IHlVcZ.jpg',
  'walkFashionShow/aDCltlS.jpg', 'walkFashionShow/bEHEoNW.jpg', 'walkFashionShow/IxbfsNg.jpg',
  'walkFashionShow/KGEUGd8.jpg', 'walkFashionShow/nRP7ZUi.jpg', 'walkFashionShow/O1YIujF.jpg', 'walkFashionShow/QRVV8Dv.jpg',
  'walkFashionShow/rplBrQV.jpg', 'walkFashionShow/walkFashionShow.jpg', 'walkFashionShow/wEirLmJ.jpg',
  'walkFashionShow/WOav5mZ.jpg', 'walkFashionShow/WPDTnuW.jpg', 'walkFashionShow/ZygDqpw.jpg'];





  constructor(public navCtrl: NavController, public viewCtrl: ViewController,
              public params: NavParams, public modalCtrl: ModalController) {
    console.log("Show");
    if(this.params.get('show'))
    {
      this.show = this.params.get('show');
      this.altName = this.show.altName;
      if(this.altName == "alphaPhiAlphaShow"){
        console.log("alpha")
        this.showPics = this.alphaPhiAlphaShow;
      }
      else if (this.altName == "msuFashionWeek"){
        this.showPics = this.msuFashionWeek;
      }
      else if (this.altName == "walkFashionShow"){
        this.showPics = this.walkFashionShow;
      }
    }
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

}
