import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  apiURL: string = 'https://jsonplaceholder.typicode.com/todos/1';
  name = 'Angular';
  products= [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(){
    this.getProducts();
  }

  public getContacts(url?: string){   

    return this.httpClient.get<any>(`${this.apiURL}`,
    { observe: 'response' }).pipe(tap(res => {
      return res;
    }));
  }

   getProducts() {
    this.products = [];
    this.getContacts().subscribe(res => {      
      this.products = res.body;
    });
  }

}
