import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-understanding',
  templateUrl: './subject-understanding.component.html',
  styleUrls: ['./subject-understanding.component.scss']
})
export class SubjectUnderstandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  // const myObservable = new Observable((observer)=>{
  //       observer.next(Math.random())
  //   })

  //   myObservable.subscribe((data)=>{
  //     console.log(data);
  //   })

  //   myObservable.subscribe((data)=>{
  //     console.log(data);
  //   })


  const myObservable = new Subject();

  //subsriber1
  myObservable.subscribe((data)=>{
    console.log(data);
  })
  //subscriber2
  myObservable.subscribe((data)=>{
    console.log(data);
  })

  myObservable.next(Math.random());
  }

}
