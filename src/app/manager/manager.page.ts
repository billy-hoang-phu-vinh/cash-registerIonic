import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HomeService } from '../home/home.service';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.page.html',
  styleUrls: ['./manager.page.scss'],
})
export class ManagerPage implements OnInit {

  itemList: Item[];//empty

  constructor(private homeServiceImport: HomeService,public alertController: AlertController) {}
  ngOnInit() {
  this.itemList=this.homeServiceImport.getAllItems();
  console.log(this.itemList)
  }

}
