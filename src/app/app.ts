import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  handleClickEvent(){

    alert("Function called")
    console.log("Function called")
    this.otherFunction()
  }
  
  otherFunction(){
    console.log("other function");
  }
  
}
