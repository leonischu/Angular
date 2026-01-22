import { Component, EventEmitter, Input, Output } from '@angular/core';
import { App } from '../app';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

 @Output() getUsers = new EventEmitter();

users =  [
  "Aarav",
  "Sita",
  "Rahul",
  "Priya",
  "Anita",
  "Rohan",
  "Kiran",
  "Pooja",
  "Sanjay",
  "Nischal"
];

ngOnInit(){
  this.getUsers.emit(this.users);
}

}
