import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
products:any;
  constructor( private productservice:ProductService) { }

  ngOnInit(): void {
    this.productservice.getAllProducts()
    .subscribe(data=>{
      console.log("data",data)
      this.products = data;
    })
  }

}
