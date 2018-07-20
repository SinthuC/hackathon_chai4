import { Component } from '@angular/core';
import { NavController, ModalController,Nav, AlertController } from 'ionic-angular';
import { Month } from '../../models/month';
import { Day } from '../../models/day'
import { Storage } from '@ionic/storage';
import { MoneyDetailPage } from '../money-detail/money-detail';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  month:Month[];
  private date = new Date();
  constructor(public navCtrl: NavController,public modal:ModalController,private nav:Nav,private alertCtrl:AlertController,private storage: Storage,private events:Events) {
    events.subscribe('paid', () => {
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    })
  }
  ngOnInit(){


  }

  ionViewWillEnter(){
    this.storage.get('month').then((val)=>{
      this.month=val; 
      console.log(val);

      if(this.month==null){
        this.month = [];
      const month_sub = new Month();
      this.month.push(month_sub);
      this.presentAlert();
      }

          });
  }


  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'ไม่พบข้อมูลการเงิน',
      subTitle: 'กรุณาทำการกรอกข้อมูลทางด้านการเงินและจำนวนเงินที่ออม',
      buttons: [
        {
          text:'กรอกข้อมูล',
          handler : ()=> {
            this.storage.set('month', this.month);
            this.nav.setRoot(MoneyDetailPage ,{month:this.month[this.month.length-1]}, {animate: true, direction: 'forward'});
          }
        }
      ]
    });
    alert.present();
  }

  saveData(){
    this.storage.set('month', this.month);
  }
  payModal(idx:number) {
    const paymodal = this.modal.create('PaymodalPage',{'idx':idx});

    paymodal.present();
  }
  reModal(idx:number) {
    const remodal = this.modal.create('RecivemodalPage',{'idx':idx});

    remodal.present();
  }
  sumModal(idx:number) {
    const sum = this.modal.create('SummarymodalPage',{'idx':idx});

    sum.present();
  }

}
