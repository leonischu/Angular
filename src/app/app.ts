import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  name = new FormControl();
  password = new FormControl();

  displayValue(){
    console.log(this.name.value,this.password.value);
    
  }
  setValues(){

    this.name.setValue("peter");
    this.password.setValue('213')


  }


}



 

