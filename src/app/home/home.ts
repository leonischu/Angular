import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  users = [
    {
      id:'1',
      name:'anil',
      age:28,
      email:'anil@test.com'
    },
    {
      id:'2',
      name:'peter',
      age:30,
      email:'peter@test.com'
    },
    {
      id:'3',
      name:'sam',
      age:23,
      email:'sam@test.com'
    },
    {
      id:'4',
      name:'bruce',
      age:25,
      email:'bruce@test.com'
    },
  ]
}
