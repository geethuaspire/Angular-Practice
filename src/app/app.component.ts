import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  
{
  name = 'Angular 5 Promise';
  promiseResult!: string;
  promiseError!: string;

  constructor() 
  {
    this.getPromise(true);
    this.getPromise(false);
  }

  private getPromise(condition: boolean)
  {
    let self = this;
    this.promiseExample(condition)
    .then(result => { self.promiseResult = result; })
    .catch(error => { self.promiseError = error; });
  }

  private promiseExample(condition: boolean): Promise<string>
  {
      const p = new Promise<string>((resolve, reject) =>
      {
          if(condition)
          {
            setTimeout(() => 
            {
              resolve("Promise resolved after 4 seconds");
            }, 4000);            
          }
          else
          {
            reject("Immediatly promise exception");
          }                
      });
      return p;
  }

}
