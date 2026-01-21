import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  bgColor = "green"
  fontSize = "100px"
  headingSizeBig = "40px"
  headingSizeSmall = "10px"

  zoom = false
  update(){
    this.zoom = !this.zoom
  }

}



 

