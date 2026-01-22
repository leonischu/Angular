import { CommonModule,UpperCasePipe } from '@angular/common';
import { Component, computed, effect, Input, Signal, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  title = "code step by step"
  name = "NISCHAL";
  date = new Date()
  amount = 10

}



 

