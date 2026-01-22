import { NgIf } from '@angular/common';
import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User } from './user/user';



@Component({
  selector: 'app-root',
  imports: [User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

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

}



 

