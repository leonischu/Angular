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
selectedUser:User | undefined;

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

    if(!this.selectedUser){
      this.userService.saveUsers(user).subscribe((data:User)=>{
      console.log(data);
      if(data){
        this.getUser();
      }
    
    })
    } else{
      const userData ={...user,id:this.selectedUser.id}
      this.userService.updateUser(userData).subscribe((data)=>{
        if(data){
          this.getUser();
        }
      })

    }
    
    
  }
  deleteUser(id:string){
    this.userService.deleteUser(id).subscribe((data:User)=>{

      //page  refresh garianu pardaina
      //  if(data){
        this.getUser();
    // }

    }
  )}

  selectUser(id:string){
    this.userService.selectUser(id).subscribe((data:User) => {
    console.log(data)
    
      this.selectedUser = data;
    
    })
    
  }


}



 

