import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const message = new ReplaySubject(2);
    message.next("hello");
    message.next("How Are You?");
    message.next("From Where You Are?");
    message.next("Stay at Home");
    //subscriber 1
    message.subscribe(msg=>console.log("user1",msg));
    message.next("Get Vaccinated");
    message.next("Keep Learning");

    //subscriber 2
    message.subscribe(msg=>console.log("user2",msg));
  }

}
