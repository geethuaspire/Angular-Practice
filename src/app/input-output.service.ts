import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputOutputService {
  //  dataEmitter = new EventEmitter<string>();
  dataEmitter = new Subject<string>();
  constructor() { }

  raiseDataEmitterEvent(data:string){
    // this.dataEmitter.emit(data);
    this.dataEmitter.next(data);
  }
}
