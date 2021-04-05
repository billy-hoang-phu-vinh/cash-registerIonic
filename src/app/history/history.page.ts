import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HomeService } from '../home/home.service';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  itemList:Item[];
  constructor(private routes:Router,private homeServiceImport: HomeService,public alertController: AlertController) {}
  ngOnInit() {
  this.itemList=this.homeServiceImport.getAllItemHistory();
  }

}
