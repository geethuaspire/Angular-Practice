import { Component, OnInit } from '@angular/core';
import { Observable , of} from 'rxjs'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  title = 'RXJS';

  array1 = [1,2,3,4,5];
  array2 = ['A','B','C'];
   myobservable = of(this.array1,new Error('error occured'),this.array2);
  youtubechannel = new Observable((observer:any)=>{
     this.myobservable.subscribe((data=>{
      console.log(data);
     }),
     (err)=>{
      console.log(err.message);
     },
     ()=>{
      console.log("completed");
     }
     )
  //   console.log("There is a new video posted");
  //  setTimeout(()=>{
  //   observer.next("First Video")
  //  },1000) ;
  //  setTimeout(() => {
  //   observer.next("Second video")
  //   }, 2000);
  //    setTimeout(() => {
  //     observer.error(new Error("Something went wrong"))
  //    },3000);
  //   setTimeout(() => {
  //     observer.next("Third video");
  //   },3000);
  //   setTimeout(() => {
  //     observer.next("fourth video");
  //   },4000);
  //   setTimeout(() => {
  //     observer.next("fifth video");
  //   },5000);
  //   setTimeout(() => {
  //     observer.complete();
  //   },3000);
    
  });
  ngOnInit(){
    this.youtubechannel.subscribe((data:any)=>{
      console.log("I have received the video");
      console.log(data);
    },(error:any)=>{
      console.log(error.message);
    },
    ()=>{
      console.log("videos are posted");
    })
  }
  
}
