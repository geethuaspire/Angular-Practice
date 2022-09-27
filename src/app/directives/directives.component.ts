import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  status:boolean=false;
  role="please select arole";
  myColor="pls select a color";
  statusNew:boolean=false;
employees=[{
  "empId":"E001",
  "empName":"Gopu",
  "Age":30
},
{
  "empId":"E002",
  "empName":"Neenu",
  "Age":31
},
{
  "empId":"E003",
  "empName":"Dilsha",
  "Age":29
},
{
  "empId":"E004",
  "empName":"Ramu",
  "Age":27
}]
  constructor() { }

  ngOnInit(): void {
  }
  
  hideAge(){
     this.status=!this.status;
  }
  toggleCase(){
    this.statusNew = !this.statusNew;
  }
}

