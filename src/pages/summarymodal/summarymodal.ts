import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the SummarymodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-summarymodal',
  templateUrl: 'summarymodal.html',
})
export class SummarymodalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SummarymodalPage');
  }

  closeModal(){
    this.view.dismiss();
  }
}
