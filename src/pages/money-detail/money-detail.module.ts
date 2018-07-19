import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoneyDetailPage } from './money-detail';

@NgModule({
  declarations: [
    MoneyDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MoneyDetailPage),
  ],
})
export class MoneyDetailPageModule {}
