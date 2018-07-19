import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the MoneyDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-money-detail',
  templateUrl: 'money-detail.html',
})
export class MoneyDetailPage {
  public anArray:any=[];
  private monthName:string[]
  private date = new Date();
  private monthN:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage) {
    this.monthName = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    this.monthN = this.monthName[this.date.getMonth()];
  }

  ngOnInit(){
  
  }
  ionViewDidLoad() {

  }
  
  Add(){
    this.anArray.push({'value':''});
    }

}
