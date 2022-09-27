import { Component, OnInit } from '@angular/core';
import { forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-join-operator',
  templateUrl: './join-operator.component.html',
  styleUrls: ['./join-operator.component.scss']
})
export class JoinOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   let list1 = of(1,2,3,4,5);
   let list2 = of(4,9,16,23,36);
   let final_list = forkJoin([list1,list2]);
   final_list.subscribe(data=>console.log("Fork join output:",data));
  }

}
