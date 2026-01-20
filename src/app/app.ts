import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  handleEvent(event:Event){
    console.log("Function called",event.type)
    console.log("value",(event.target as HTMLInputElement).value)
  //   console.log("button clicked",(event.target as Element).className)
  //   console.log("button clicked",event)
  }
 

 

}
