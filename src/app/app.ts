import { NgIf } from '@angular/common';
import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
userDetails:any;
addDetails(val:NgForm){
  console.log(val)
  this.userDetails = val;
}


}



 

