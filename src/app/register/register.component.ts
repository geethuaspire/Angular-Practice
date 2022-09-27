import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IDeactivateComponent } from '../deactivate.guard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements IDeactivateComponent {

  constructor() { }
  canExit():Observable<boolean>|Promise<boolean>|boolean{
    if(confirm("Do you wish to continue")){
      return true;
    }
    else{
      return false;
    }
  }

  ngOnInit(): void {
  }

}
