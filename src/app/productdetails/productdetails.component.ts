import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService} from '../product.service';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
//productData:any="";
  constructor(
    private productservice:ProductService,
    private route:ActivatedRoute,
  ) { }
 productData:any="";
 sid:any;
 productDetailedData:any;
  ngOnInit(): void {
       this.productservice.getAllProducts().subscribe((data:any)=>{
          this.productData = data;

       this.route.params.subscribe((param:any)=>{
            this.sid = param['id'];

            for(let index=0;index<this.productData.length;index++){
                   if(this.productData[index].id == this.sid){
                        this.productDetailedData = this.productData[index];
                        break;      
                   }
            }
       })   
       })
  }
}
