import { Component, EventEmitter, Input, Output } from '@angular/core';
import { App } from '../app';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

//  @Output() getUsers = new EventEmitter();
@Input() counter =0
 name ="nis"
// constructor(){
//   console.log("constructor");
//   this.name ="side"

  
// }
// ngOnInit(){
 
//   //this runs after constructor is initialized
//   this.name="sam"


// }
// ngOnDestroy(){
//   console.log("Destructor");
  
// }
// ngOnChanges(){
//   console.log("this runs every time input value changes");
  

// }

}
