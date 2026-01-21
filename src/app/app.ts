import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  users = [
  "Aarav",
  "Sita",
  "Rahul",
  "Priya",
  "Anita",
  "Rohan",
  "Kiran",
  "Pooja",
  "Sanjay",
  "Nischal"
];
 

}



//  userName = signal('Nischal')
//   count =signal(0)
//   displayHeading=false
//   constructor(){
//     effect(()=>{
//       console.log(this.userName)
//         if(this.count() == 2)
//         {
//           this.displayHeading = true;
//           setTimeout(()=>{
//             this.displayHeading=false
//           },2000)
//         }
//         else{
//           this.displayHeading = false
//         }



//     })
//   }

//  togglevalue(){
//   this.count.set(this.count()+1)
//  }










  // x =signal(10);
  // y = signal(20);
  // z = computed(()=>this.x() + this. y()) ;
  // showValue(){
  //   console.log(this.z());
  //   this.x.set(100) ;
  //   console.log(this.z());
    
  // }



// data = signal<number | string>(10);
// data: WritableSignal<number | string> = signal(10);
// count:Signal<number> = computed(()=>200 ); // define garesi esko value change garna mildaina 
// updateSignal(){
//   this.data.set("hello")








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
 

