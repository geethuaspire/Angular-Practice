import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-behaviour-subject',
  templateUrl: './behaviour-subject.component.html',
  styleUrls: ['./behaviour-subject.component.scss']
})
export class BehaviourSubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const subject = new Subject();
    const subject = new BehaviorSubject(10);
    //subscriber 1
    subject.subscribe(d=>console.log("subject subscriber 1:",d));
    //subscriber 2
    subject.subscribe(d=>console.log("Subject subscribed 2",d));

    subject.next(120);

}
}