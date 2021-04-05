import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { Item } from '../models/item.model';
import {NgForm} from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnewproduct',
  templateUrl: './addnewproduct.page.html',
  styleUrls: ['./addnewproduct.page.scss'],
})
export class AddnewproductPage implements OnInit {
  selectedItem: Item;//empty
  form: FormGroup
  itemList:Item[];

  constructor(private routes:Router,private homeServiceImport: HomeService,public alertController: AlertController) {
    this.selectedItem={name:"",quantity:0,price:0}
   }

  ngOnInit() {
    this.itemList=this.homeServiceImport.getAllItems();

    this.form = new FormGroup({
      name : new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      quantity : new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      price : new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }
  async onSubmit(anyform:NgForm){

    if (this.form.invalid) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'You have to slect item and provide a new quantity',
        buttons: ['Ok']
      });
      await alert.present();
    } else {
      let updatedItem = {
        name:anyform.value.name,
        quantity:anyform.value.quantity,
        price:anyform.value.price
      }
      this.homeServiceImport.addItem(updatedItem)
      this.itemList=this.homeServiceImport.getAllItems().reverse();
      this.routes.navigate(['home'])

    }
    
  }
}
