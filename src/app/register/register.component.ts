import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { COMMONCONST } from '../shared/constants/common.constant';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
   data={
    "email_address": "jyothish@crownfieldservices.net",
    "employee_type": "super_user",
    "home_address": "qwertyu",
    "is_company_profile_complete": true
}

    arr =['abc','def','geethu','ghi'];
    isName=this.arr.includes('geethu');
    nameIndex=this.arr.indexOf('geethu');
    deleteCount = 1;
    removedItems = this.arr.splice(this.nameIndex, this.deleteCount);
  registrationForm: FormGroup;
  submitted=false;
  fieldPasswordType:Boolean = false;
  
  constructor(
    private formBuilder:FormBuilder,
  ) { 
    this.registrationForm = this.formBuilder.group({
      email_address: ['',Validators.required],
      employee_type:['',[Validators.required,Validators.pattern(COMMONCONST.emailPattern)]],
      home_address: ['',Validators.required],
      is_company_profile_complete: [false, Validators.requiredTrue],
      how_about_us: ['', Validators.required]
    })
  }
  ngOnInit(): void {
  }
  get registrationControls(){
    return this.registrationForm.controls;
  }
  registerUser(){
    this.submitted = true;
    console.log(this.registrationForm);
    }
    showUsername(){
        this.registrationForm.patchValue({
          email_address:this.data.email_address,
          employee_type:`${this.data.employee_type + this.data.email_address}`,
          home_address: `${this.data.home_address}`,
          is_company_profile_complete:`${this.data.is_company_profile_complete}`
        });
    }

    findElement(){
    console.log(this.isName);
     }
     findIndex(){
      console.log(this.nameIndex);
     }
     removeItem(){
       console.log("arr",this.arr);
       console.log("Removed Item",this.removedItems);
     }

}
