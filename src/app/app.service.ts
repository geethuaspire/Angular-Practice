import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MyService {

  mydata: MyDataType[] = [
    {"id":1, "value":"value_1_1"},
    {"id":1, "value":"value_1_2"},
    {"id":2, "value":"value_2_1"},
    {"id":2, "value":"value_2_2"},
    {"id":3, "value":"value_3_1"},
    {"id":3, "value":"value_3_2"}
  ];

  constructor() { }

  getData(id: number):Observable<MyDataType[]>
  {
    let data = new Observable<MyDataType[]>((observer: { next: (arg0: MyDataType[]) => void; }) => {

          setTimeout(() => {
              observer.next(this.mydata.filter(i => i.id == id));
          }, 4000);
    });
    return data;
  }
}

export class MyDataType
{
  public id!: number;
  public value!: string;
}