import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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
idx:number
  constructor(public navCtrl: NavController, public navParams: NavParams,private view: ViewController,private storage:Storage) {
    this.idx = navParams.get('idx');
  }

  ionViewDidLoad() {
    this.storage.get('month').then((val)=>{
      
    });
  }

  closeModal(){
    this.view.dismiss();
  }
}
