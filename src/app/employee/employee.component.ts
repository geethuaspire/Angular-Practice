import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent implements OnInit {
  details:boolean=false;
  employees:any=[    

    {"name":"Ram", "email":"ram@gmail.com", "age":23},    
    
    {"name":"Shyam", "email":"shyam23@gmail.com", "age":28},  
    
    {"name":"John", "email":"john@gmail.com", "age":33},    
    
    {"name":"Bob", "email":"bob32@gmail.com", "age":41}   
    
    ];
    emp:any =[];

  constructor() { }
  
  ngOnInit(): void {
     
  //    this.employees.forEach((o: { age: number; email:string; name:string  })=> {
  //     if ( o.age < 30) {
  //       console.log(o.email,o.name,o.age);
  //      }
  // });
    this.employees.map(function(employee:any){

      const result = [];
      if(employee.age<30){
        result.push(employee);
      }
      console.log(result);
   })
}
showDetails(){
this.details=true;
for (var value of this.employees) {
  console.log(value);
}

 }

 getColor(){
    return this.details===true?'green':'red';
 }
 showDe(){
  //this.emp.push(this.emp.length+1);
  this.emp.push(new Date());
  console.log("emp name",this.employees.name);
  
 }

}