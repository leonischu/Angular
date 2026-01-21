import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  profileForm =new FormGroup({
    name: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),

  })
  onSubmit(){
    console.log(this.profileForm.value);
  }


}



 

