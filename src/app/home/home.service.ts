import { Injectable } from '@angular/core';
import { Item } from "../models/item.model";

@Injectable({
    providedIn: 'root'
  })

  export class HomeService {
 
    constructor() { }
    //set up the service
  
    //IN THE FUTURE: WE WILL GET A DATA from server (HTTP SERVICE)
    private itemList: Item[] = [
      {
          name:'Pants',
          quantity:20
      },
      {
        name:'Shoes',
        quantity:50
    },
    {
        name:'Hats',
        quantity:10
    },
    {
        name:'Tshirts',
        quantity:10
    },
    {
        name:'Dresses',
        quantity:24
    }
     ];
     getAllItems(){
      return [...this.itemList];
     }
     //only one-> find/ many = filter
     getRecipe(Name){
      return {...this.itemList.find(i=>{return i.name===Name}) }
     }
     updateElememt(Name){
         this.itemList.find(i=>{return i.name===Name})
         
       }
     
  }