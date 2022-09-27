import { Component, OnInit } from '@angular/core';
import { ProductService} from '../product.service';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
productData:any="";
  constructor(
    private productservice:ProductService
  ) { }

  ngOnInit(): void {
   // this.productservice.getAllProducts.subscribe((data: any)=>{
     // this.productData = data;
  //  })
  }

}
