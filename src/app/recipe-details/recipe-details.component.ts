import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  count=0;
  @Input() pm="";
  @Output() childevent = new EventEmitter();
  employee={
    "empId":"E001",
    "empName":"Siva",
    "age":34
};
status:boolean=false;
message="hello";
size:any="";
  constructor() { }

  ngOnInit(): void {
  }
  sendMessage(){
      this.childevent.emit("hello parent");
  }
  hideBut(){
    this.status = !this.status;
  }
  incrementCount(){
      this.count=this.count+1;
  }


}
