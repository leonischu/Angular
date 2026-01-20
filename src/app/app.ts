import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // handleClickEvent(){

  //   alert("Function called")
  //   console.log("Function called")
  //   this.otherFunction()
  // }
  
  // otherFunction(){
  //   console.log("other function");
  // }

    // name:string = "Nischal"
    // updateName(){
    //   this.name ="hello"
    // }
    
    // name = "Nischal"
    // updateName(){
    //   this.name ="hello"
    // }

  name = "Nischal"
  data:string|number = "hello"
  other:any = true //any dataType can be used

    updateName(){
      this.name ="hello"
      this.data ="5555"
    }

    updateVar(){
      let x = 30; //this is possible inside function only
      console.log(x)
    }
    sum(a:any,b:any){
      console.log(a+b);
    }

}
