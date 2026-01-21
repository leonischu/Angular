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

  task = "";
  taskList:{id:number,task:string}[] = [];
  nextId=1;

  addTask(){

    this.taskList.push({id:  this.nextId++,task:this.task})
    console.log(this.taskList);
    
  }
  deleteTask(taskId:number){
   this.taskList =  this.taskList.filter((item) => item.id! == taskId);
  }

}



 

