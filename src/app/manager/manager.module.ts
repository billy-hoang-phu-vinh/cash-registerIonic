import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagerPageRoutingModule } from './manager-routing.module';

import { ManagerPage } from './manager.page';

import { Item } from '../models/item.model';
import { HomeService } from "../home/home.service";
import { AlertController } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagerPageRoutingModule
  ],
  declarations: [ManagerPage]
})
export class ManagerPageModule {
  itemList: Item[];//empty

  constructor(private homeServiceImport: HomeService,public alertController: AlertController) {}
  ngOnInit() {
  this.itemList=this.homeServiceImport.getAllItems();
  console.log(this.itemList)
  }
}
