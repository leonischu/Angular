import { CommonModule,NgIf,UpperCasePipe } from '@angular/common';
import { Component, computed, effect, Input, Signal,afterEveryRender, signal, ViewChild, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

import { UsersService } from './service/users-service';
import { User } from './interfaces/User';




@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

userList:User[]=[];

  constructor(private userService:UsersService){}

  ngOnInit(){
    this.getUser();
  
  }
getUser(){
    this.userService.getUsers().subscribe((data:User[]) => {
      console.log(data);
      this.userList= data;
      
    })
}

  addUser(user:User){
    this.userService.saveUsers(user).subscribe((data:User)=>{
      if(data){
        this.getUser();
      }
    
    })
    
  }


}



 

