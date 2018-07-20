import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Day } from '../../models/day';
/**
 * Generated class for the RecivemodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recivemodal',
  templateUrl: 'recivemodal.html',
})
export class RecivemodalPage {
idx:number
day:Day
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController,private storage:Storage) {
    this.idx = navParams.get('idx');
  }

  ionViewDidLoad() {
    this.storage.get('month').then((val)=>{
      this.day = val[this.idx];
    });
  }
  closeModal(){
    this.view.dismiss();
  }

}
