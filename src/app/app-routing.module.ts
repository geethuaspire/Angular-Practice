import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'product/:id',
    component:ProductdetailsComponent
  },
  {
    path:'**',
    component:HomeComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
