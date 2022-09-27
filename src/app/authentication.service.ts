import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    isLoggedIn:boolean;
    userName:any;
  constructor() {
    this.isLoggedIn = false;
   }

   login(userName:string,password:string){
         this.isLoggedIn = true;
         this.userName = userName;
         return of(this.isLoggedIn);
   }
   isUserLoggedin():boolean{
     return this.isLoggedIn
   }
   isAdminuser():boolean{
      if(this.userName == 'Admin') {
        return true;
      }
      return false;
   }
   logoutUser():void{
    this.isLoggedIn = false;

   }
}
