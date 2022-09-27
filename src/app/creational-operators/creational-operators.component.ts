import { Component, OnInit } from '@angular/core';
import { from ,iif ,of } from 'rxjs';

@Component({
  selector: 'app-creational-operators',
  templateUrl: './creational-operators.component.html',
  styleUrls: ['./creational-operators.component.scss']
})
export class CreationalOperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let arr = [2,4,6,8,10];
    let test = from(arr);
     test.subscribe(x=>console.log(x));
 

    let task1 = iif(()=>(Math.random()+2)%2 === 0,of("Even Case"),of("Odd Case"));
    task1.subscribe(value=>
      console.log(value))
  }

}
