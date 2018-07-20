import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Day } from '../../models/day';
import { Month } from '../../models/month';
import { HomePage } from '../../pages/home/home';
import { Events } from 'ionic-angular';
/**
 * Generated class for the PaymodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paymodal',
  templateUrl: 'paymodal.html',
})
export class PaymodalPage {
idx:number;
day:Day
month:Month[];
detail:string
amount:number
etc:string
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController,private storage:Storage,private events:Events) {
 this.idx = navParams.get('idx');
 console.log("index: " + this.idx)
  }

  ionViewWillEnter() {
    this.storage.get('month').then((val)=>{
      this.month = val
      this.day = val[val.length-1].day[this.idx];
      console.log("dfddf day",this.day);
    });
  }
  closeModal(){
    this.view.dismiss();
    this.events.publish('paid');
    
  }

  pushToDay(){
    this.day.moneyStream.push({detail:this.detail,amount:this.amount,etc:this.etc,status:'pay'});
    this.day.limitExpense -= this.day.moneyStream[this.day.moneyStream.length-1].amount;
    this.month[this.month.length-1].day[this.idx] = this.day;
    this.storage.set('month',this.month);
    
  //  this.nav.setRoot(HomePage,{},{animate: true, direction: 'forward'});
   this.closeModal();
  }

  getAmount(){
    let amount=0;
    for(let i=0;i<this.day.moneyStream.length-1;i++){
      amount+=Number(this.day.moneyStream[i].amount);
    }
    return amount;
  }

}
