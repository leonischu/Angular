import { CommonModule,NgIf,UpperCasePipe } from '@angular/common';
import { Component, computed, effect, Input, Signal,afterEveryRender, signal, ViewChild, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { Product } from './services/product';




@Component({
  selector: 'app-root',
  imports: [User,NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


//   productData:{
//     name: string;
//     branch: string;
//     price: string;
// }[] | undefined
productList:any;

  constructor(private productService:Product){
   

    
  }

// getProductData(){
//  this.productData= this.productService.getProductData();
//  console.log(this.productData);
 
// }
ngOnInit(){
  this.productService.getProductList().subscribe((data:any)=>{
    console.log(data);
    this.productList=data.products;
    
  })
}
  


}



 

