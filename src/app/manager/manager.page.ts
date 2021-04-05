import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private routes:Router) {}
  ngOnInit() {

  }

  navigateHistory(){
    this.routes.navigate(['history'])
  }
  restock(){
    this.routes.navigate(['restock'])
  }
  addproduct(){
    this.routes.navigate(['addnewproduct'])
  }
}
