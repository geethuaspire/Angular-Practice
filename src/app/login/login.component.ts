import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
userName:any="";
password:any="";
retUrl:any="home";
  constructor(
    private authserice:AuthenticationService,
    private router:Router,
    private ar:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.ar.queryParamMap.subscribe(params=>{
      this.retUrl = params.get('retUrl');
      console.log("login/ngoninit"+this.retUrl);
    })
  }
onFormSubmit(loginForm:any){
     this.authserice.login(this.userName,this.password).
     subscribe(data=>{
      if(this.retUrl!=null){
           this.router.navigate([this.retUrl])
      }
      else{
          this.router.navigate(["home"]);
      }
     })
}
}