import { NgIf } from '@angular/common';
import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule,NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  profileForm =new FormGroup({
    name: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),
    email: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.pattern('^[a-z0-9._%+-]')]),

  })
  onSubmit(){
    console.log(this.profileForm.value);
  }
  get name(){
    return this.profileForm.get('name')
  }
  get email(){
    return this.profileForm.get('email')
  }
  get password(){
    return this.profileForm.get('password')
  }


}



 

