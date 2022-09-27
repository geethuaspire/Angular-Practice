import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmValidator } from '../confirm.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
   registrationForm = new FormGroup({
    userName:new FormControl("Enter your username",[Validators.required,Validators.minLength(3)]),
    mobileNo: new FormControl,
    emailId: new FormControl(),
    password:new FormControl("",[Validators.required]),
    confirmpassword: new FormControl("",[Validators.required])
   });
    
  constructor(private fb:FormBuilder) {}
  registrationForm1 = this.fb.group({
    userName:["this is through formbuilder",[Validators.required,Validators.minLength(3)]],
    mobileNo:[],
    emailId:[],
    password:["",[Validators.required]],
    confirmpassword:["",[Validators.required]],
   }, {validator:ConfirmValidator('password','confirmpassword')}
   )
  ngOnInit(): void {
  }

}
