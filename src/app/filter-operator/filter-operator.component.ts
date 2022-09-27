import { Component, OnInit } from '@angular/core';
import { filter, of } from 'rxjs';

@Component({
  selector: 'app-filter-operator',
  templateUrl: './filter-operator.component.html',
  styleUrls: ['./filter-operator.component.scss']
})
export class FilterOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let all_nums = of(1,6,9,10,20,40);
    let final_value = all_nums.pipe(filter(data=>data%2 === 0));
    final_value.subscribe(data=>console.log("Even Numbers from the final_value observable",data));
  }

}
