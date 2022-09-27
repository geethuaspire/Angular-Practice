import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
   products:Product[];
   product:any;
  constructor() { 
    this.products=[
      new Product(1,"memorycard",500),
      new Product(2,"PenDrive",750),
      new Product(3,"ComputerChip",6000),
      new Product(4,"LaptopBattery",1000),
      new Product(5,"PrinterInk",4000)
    ]
  }

  getAllProducts():Observable<Product[]>{
     return of(this.products);
  }
  getProduct(id:number):Observable<Product>{
     this.product = this.products.find(i=>i.productId=id);
    return of(this.product)
  }
}
