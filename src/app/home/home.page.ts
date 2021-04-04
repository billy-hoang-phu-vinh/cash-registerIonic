import { Component } from '@angular/core';
import { Item } from '../models/item.model';
import { HomeService } from "./home.service";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedItem: Item;//empty
  selectedQuantity: string;//empty
  total: string;//empty

  //item array:
  itemList: Item[];//empty
 
  constructor(private homeServiceImport: HomeService,public alertController: AlertController) {}
  ngOnInit() {
    this.selectedItem={name:"",quantity:0}
    this.selectedQuantity="Quantity";
    this.total="Total";
    this.itemList = this.homeServiceImport.getAllItems();
  }

  pickItem(i){
    this.selectedItem = i;
  }
  async pickNumber(n){
    if (!this.selectedItem.name) {
      const alert = await this.alertController.create({
        header: 'Item not chosen',
        message: 'You have to slect one item',
        buttons: ['Back']
      });
      await alert.present();
    } else {
      if (this.selectedQuantity=="Quantity") {
        this.selectedQuantity="";
      }
      var checkNum = parseInt(this.selectedQuantity+n.target.innerText)
      if (checkNum > this.selectedItem.quantity) {
        const alert = await this.alertController.create({
          header: 'Over quantity',
          message: 'Item out of stock, please try again',
          buttons: ['Back']
        });
        this.selectedQuantity=""
        await alert.present();
        
      } else {
        this.selectedQuantity += n.target.innerText
        var num = parseInt(this.selectedQuantity) * this.selectedItem.quantity
        this.total = ""+num
      }

    }
    
  }
  async buyItem(n){
    if (!this.selectedItem.name || this.selectedQuantity=="Quantity"|| !this.selectedQuantity) {
      const alert = await this.alertController.create({
        header: 'Missing item information',
        message: 'You have to slect one item and quantity',
        buttons: ['Back']
      });
      await alert.present();
    } else {
      //update the quantity in SHOP & user
      
    }
    //check selected item

    //item exist

  }

}
