import { CommonModule,NgIf,UpperCasePipe } from '@angular/common';
import { Component, computed, effect, Input, Signal,afterEveryRender, signal, ViewChild, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

import { UsersService } from './service/users-service';




@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

userList:any;

  constructor(private userService:UsersService){}

  ngOnInit(){
    this.userService.getUsers().subscribe((data:any) => {
      console.log(data);
      this.userList= data;
      
    })
  }


}



 

