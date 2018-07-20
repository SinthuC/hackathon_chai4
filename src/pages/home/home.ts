import { Component } from '@angular/core';
import { NavController, ModalController,Nav, AlertController } from 'ionic-angular';
import { Month } from '../../models/month';
import { Storage } from '@ionic/storage';
import { MoneyDetailPage } from '../money-detail/money-detail';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  month:Month[];

  constructor(public navCtrl: NavController,public modal:ModalController,private nav:Nav,private alertCtrl:AlertController,private storage: Storage) {
   
    
  }

  ngOnInit(){
    this.storage.get('month').then((val)=>{
      this.month=val;
      console.log(this.month);

      if(this.month==null){
        this.month = [];
      const month_sub = new Month();
      this.month.push(month_sub);
      this.presentAlert();
      }

          });

    
    
    
    
    

  }

ngOnDestroy(){
 this.saveData();
}

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'ไม่พบข้อมูลการเงิน',
      subTitle: 'กรุณาทำการกรอกข้อมูลทางด้านการเงินและจำนวนเงินที่ออม',
      buttons: [
        {
          text:'กรอกข้อมูล',
          handler : ()=> {
            this.nav.setRoot(MoneyDetailPage ,{month:this.month}, {animate: true, direction: 'forward'});
          }
        }
      ]
    });
    alert.present();
  }

  saveData(){
    this.storage.set('month', this.month);
  }
  payModal() {
    const paymodal = this.modal.create('PaymodalPage');

    paymodal.present();
  }
  reModal() {
    const remodal = this.modal.create('RecivemodalPage');

    remodal.present();
  }
  stateModal() {
    const stamodal = this.modal.create('StatementmodalPage');

    stamodal.present();
  }
  sumModal() {
    const sum = this.modal.create('SummarymodalPage');

    sum.present();
  }

}
