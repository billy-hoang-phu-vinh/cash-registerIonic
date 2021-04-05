import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HomeService } from '../home/home.service';
import { Item } from '../models/item.model';
import {NgForm} from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-restock',
  templateUrl: './restock.page.html',
  styleUrls: ['./restock.page.scss'],
})
export class RestockPage implements OnInit {
  form: FormGroup
  selectedItem: Item;//empty

  itemList:Item[];
  constructor(private routes:Router,private homeServiceImport: HomeService,public alertController: AlertController) {}
  ngOnInit() {
    this.selectedItem={name:"",quantity:0,price:0}

  this.itemList=this.homeServiceImport.getAllItems();
   //set condition
   this.form = new FormGroup({
    quantity : new FormControl(null, {
      updateOn: 'blur',
      validators: [Validators.required]
    })
  });
  }
  manager(e){
    this.routes.navigate(['manager'])
  }
  pickItem(i){
    this.selectedItem = i;
  }
  async onSubmit(anyform:NgForm){

    if (!this.selectedItem.name || this.form.invalid) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'You have to slect item and provide a new quantity',
        buttons: ['Ok']
      });
      await alert.present();
    } else {
      let updatedItem = {
        name:this.selectedItem.name,
        quantity:anyform.value.quantity
      }
      this.homeServiceImport.restock(updatedItem)
      this.itemList=this.homeServiceImport.getAllItems().reverse();

    }
    
  }
}
