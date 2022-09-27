import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-on-change-demo',
  templateUrl: './ng-on-change-demo.component.html',
  styleUrls: ['./ng-on-change-demo.component.scss']
})
export class NgOnChangeDemoComponent implements OnChanges, OnInit {
   username:any="";
  constructor() { }
   ngOnChanges(changes: SimpleChanges): void {
    let property = changes[this.username]
    console.log("Previous Value:"+property.previousValue)
     console.log("Current Value:"+property.currentValue)
   }
  ngOnInit(): void {
  }

}
