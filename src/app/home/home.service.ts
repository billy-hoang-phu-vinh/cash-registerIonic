import { Injectable } from '@angular/core';
import { Item } from "../models/item.model";

@Injectable({
    providedIn: 'root'
  })

  export class HomeService {
 
    constructor() { }
    //set up the service
  
    //IN THE FUTURE: WE WILL GET A DATA from server (HTTP SERVICE)
    public itemList: Item[] = [
      {
          name:'Pants',
          quantity:20,
          price:50.7
      },
      {
        name:'Shoes',
        quantity:50,
        price:90

    },
    {
        name:'Hats',
        quantity:10,
        price:50.7

    },
    {
        name:'Tshirts',
        quantity:10,
        price:30

    },
    {
        name:'Dresses',
        quantity:24,
        price:45

    }
     ];
     public itemHistory: Item[]=[]

     
     getAllItems(){
      return [...this.itemList];
     }
     getAllItemHistory(){
        return [...this.itemHistory];
       }
     //only one-> find/ many = filter
     getItem(Name){
      return {...this.itemList.find(i=>{return i.name===Name}) }
     }
     restock(itemElement){
        const item = this.getItem(itemElement.name)
        let pos = this.itemList.findIndex(i=>i.name===itemElement.name)
        this.itemList.splice(pos, 1)
        this.itemList.push({
            name:item.name,
            quantity: itemElement.quantity,
            price:item.price

        })
        
     }
     addItem(itemElement){
        this.itemList.push({
            name:itemElement.name,
            quantity: itemElement.quantity,
            price:itemElement.price
        })
        
     }
     updateElememt(itemElement){
        const item = this.getItem(itemElement.name)
        console.log(`item found:`)
        console.log(item)
        
        let pos = this.itemList.findIndex(i=>i.name===itemElement.name)
        console.log(pos)
        this.itemList.splice(pos, 1)
        console.log(`new list: `+this.itemList)
        let newquantity = item.quantity - itemElement.quantity
        console.log(newquantity)
        this.itemList.push({
            name:item.name,
            quantity: newquantity,
            price:item.price
        })
        this.itemHistory.push({
            name:item.name,
            quantity: itemElement.quantity,
            price:item.price

        })
         return [...this.itemList]
       }
     
  }