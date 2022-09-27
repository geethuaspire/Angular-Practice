import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-mathematicaloperator',
  templateUrl: './mathematicaloperator.component.html',
  styleUrls: ['./mathematicaloperator.component.scss']
})
export class MathematicaloperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let items =[
      {
        item1:"Phone",
        price:1000.00
      },
      {
        item1:"Tablet",
        price:"10000.00"
      },
      {
        item1:"Laptop",
        price:90000.00
      },
      {
        item1:"PC",
        price:50000.00
      }
    ]

    // let finalvalue = from(items).pipe(reduce((acc,itemsdet)=>acc+itemsdet.price,0))
    // finalvalue.subscribe(data=>{
    //   console.log("The total price of all the items:",data);
    // })
  }

}
