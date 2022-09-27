import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-asynchronous-subject',
  templateUrl: './asynchronous-subject.component.html',
  styleUrls: ['./asynchronous-subject.component.scss']
})
export class AsynchronousSubjectComponent implements OnInit {

  constructor() { }
 
  ngOnInit(): void {
    // const subject = new AsyncSubject();
    // subject.next("1");
    // subject.next("2");
    // subject.next("3");
    // subject.complete();

    // subject.subscribe(data=>{
    //   console.log(data);
    // })

    this.getUserData().subscribe((data:any)=>{
      console.log(data);
    })
  }
 getUserData(){
  const url = "https://jsonplaceholder.typicode.com/users";
  const cache:any ={};
    if(!cache[url]){
      cache[url]= new AsyncSubject()
       fetch(url).then(res=>res.json()).then(data=>{
        cache[url].next(data);
        cache[url].complete();
       })
    }
    return cache[url].asObservable();
  }
}
