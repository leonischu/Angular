import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,NgIf,NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

color = "black"

 changeColor(color:string){
  this.color = color
 }

}



  // show = true
  // students = ['ram','hari','sam'];
  // login = false;


 

