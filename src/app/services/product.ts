import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  
  constructor(){
  console.log("Product services");
  }
  
  getProductData(){
    return[
      {name:'nis',branch:'samsung',price:'2000'},
      {name:'sid',branch:'samsung',price:'3000'},
      {name:'sam',branch:'samsung',price:'4000'},
    ]
  }
  
}
