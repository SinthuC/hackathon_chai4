import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Month } from '../../models/month';

import { HomePage } from '../../pages/home/home'
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
  private monthName:string[]
  private date = new Date();
  private monthN:string;
  month:Month;
  monthArray:Month[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage,private nav:Nav) {
    this.monthName = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
    "กรกฏาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
    this.monthN = this.monthName[this.date.getMonth()];
    this.monthArray = []
    
  }

  ngOnInit(){
    this.month = this.navParams.get('month');
    this.month.earlyExpense = [];
  

  //  this.month.dayInMonth =3;
  console.log(this.month);
  }

  
  

   getDaysInMonth(month,year) {
   return new Date(year, month, 0).getDate();
  }

  Add(){
    this.month.earlyExpense.push({'detail':'','amount':0});
    }

  onSave(){
    this.month.dayInMonth = this.getDaysInMonth(this.date.getMonth()+1,this.date.getFullYear())
    this.month.startDay = this.date.getDate();
   // this.month.limitExpense =

    this.storage.get('month').then((val) => {
      this.monthArray = val
      this.monthArray[this.monthArray.length-1]=this.month;
      this.saveData();
    });
    
    
    
    
    this.nav.setRoot(HomePage,{},{animate: true, direction: 'forward'});
  }

  saveData(){
  
    console.log("monthArray",this.monthArray);
    this.storage.set('month',this.monthArray);
  }

  getEarlyExpense(){
    for(let i = 0 ; i < this.month.earlyExpense.length-1;i++){

    }
  }

}
