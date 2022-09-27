import { Component } from '@angular/core';
import { DeliverService } from './deliver.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// export class AppComponent implements OnInit{
  export class AppComponent{

  ct:any
  status:any;
  title = 'Rxjs Demo';
  // constructor(private deliveryservice:DeliverService){}
  constructor(){}
  ngOnInit():void{
    //  this.ct="hello";
    // this.deliveryservice.statusInfo()
    // .subscribe(data=>{
    //   this.status = data;
    // })
  }
  checkPassword(password:string,confirmpaswword:string){
       if(password == confirmpaswword){
             return true;
       }
       else{
        return false;
       }
  }
  
}
