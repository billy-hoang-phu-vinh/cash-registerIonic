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
     updateElememt(itemElement){
        const item = this.getRecipe(itemElement.name)
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
            quantity: newquantity
        })
         return [...this.itemList]
       }
     
  }