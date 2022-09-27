import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-consumer-subject',
  templateUrl: './consumer-subject.component.html',
  styleUrls: ['./consumer-subject.component.scss']
})
export class ConsumerSubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const subject = new Subject();
    const data = ajax("https://jsonplaceholder.typicode.com/users")
    //subscriber 1
    subject.subscribe(data=>{
      console.log("Data Received");
      console.log(data);
  
  })
    //subscriber 2
    subject.subscribe(data=>console.log("data received"))

    const result = data.subscribe(subject);
  }

}
