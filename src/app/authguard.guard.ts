import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate,CanActivateChild {
  constructor(
    private router:Router,
    private authservice:AuthenticationService
    ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean|any{
      if(!this.authservice.isUserLoggedin()){
            alert("You are not allowed to view this page.You are redirected to Login page");
            this.router.navigate(["login"],{queryParams:{retUrl:route.url}})
            return false;
      }
      return true;
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(!this.authservice.isAdminuser()){
         alert("please watch out .only admincan do the opeation");
         return false;
    }
    return true;
  }
  
}
