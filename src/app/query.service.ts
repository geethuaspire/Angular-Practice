import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http:HttpClient) { }
  sendQuery(body:any){
   return this.http.post("http://localhost:3000/contactUs",body);
  }
}
