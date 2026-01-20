import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

// data = signal<number | string>(10);
data: WritableSignal<number | string> = signal(10);
// count:Signal<number> = computed(()=>200 ); // define garesi esko value change garna mildaina 
updateSignal(){
  this.data.set("hello")
}







// count = signal(10)
// x = 20;
// constructor(){
//   effect(()=>{
//     console.log(this.count());
//   })

// }

// updateValue(val:string){

//   if(val=='inc'){
//   this.count.set(this.count()+1);
//   // this.x= this.x+1;
//   }
// else {
// this.count.set(this.count()-1)
// }


// }
 
}
