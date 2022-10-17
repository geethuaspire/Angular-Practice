import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'unit_test';
  checkPassword(password:string,confirmPassword:string){
    if(password == confirmPassword){
      return true;
    }
    else{
      return false;
    }
  }
}
