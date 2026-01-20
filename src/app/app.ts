import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  display=true;
  
  hide(){
    this.display = false
  }
 
  show(){
    this.display = true
  }
  Toggle(){
    this.display = !this.display
  }
 
}
