import { Component, OnInit } from '@angular/core';
import { QueryService } from '../query.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor(private queryservice:QueryService) { }
userName:any="";
emailId:any="";
mobileNo:any="";
query:any="";

  ngOnInit(): void {
  }
  sendQuery(){
    let body={
      username:this.userName,
      emailid:this.emailId,
      mobileno:this.mobileNo,
      query:this.query
     }
     this.queryservice.sendQuery(body).subscribe((data)=>{
       if(data!=null){
        alert("Submitted Successfully!!");
       }else{
        alert("Please wait...server encountered some problem!!");
       }
     })
    
  }
}
