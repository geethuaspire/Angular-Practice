
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliverService {
 statusInfo(){
 const deliverystatus = new Observable((orderstatus)=>{
       orderstatus.next("order created");
       setTimeout(() => {
           orderstatus.next("order processing");
       }, 3000);

       setTimeout(() => {
        orderstatus.next("order confirmed");
    }, 6000);
    setTimeout(() => {
      orderstatus.next("out for delivery");
  }, 9000);
  setTimeout(() => {
    orderstatus.next("Delivered");
}, 11000);
  });
  return deliverystatus;
}
  constructor() { }
}
