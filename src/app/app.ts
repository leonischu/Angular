import { CommonModule,NgIf,UpperCasePipe } from '@angular/common';
import { Component, computed, effect, Input, Signal,afterEveryRender, signal, ViewChild, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User } from './user/user';




@Component({
  selector: 'app-root',
  imports: [User,NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @ViewChild('user') User:any

  counter = 0;

  constructor(){
    afterEveryRender(()=>{
      console.log("After render",this.User.counter);

    })
  }

  onUpdate(){
    this.counter++;

  }
  


}



 

