import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RegisterComponent } from './register/register.component';
import { QueryComponent } from './query/query.component';
import { PaymentComponent } from './payment/payment.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { DebitcardComponent } from './debitcard/debitcard.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/",
    pathMatch:"full"
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'product',
    component:ProductComponent,

    children:[
      {
        path:':id',
        component:ProductdetailsComponent,
      }
   ]
  },
  {
    path:'payment',
    component:PaymentComponent,

    children:[
      {
        path:'credit',
        component:CreditcardComponent
      },
      {
        path:'debit',
        component:DebitcardComponent

      }
    ]
  },
  {
    path:'query',
    component:QueryComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  { path: 'loan', loadChildren: () => import('./loan/loan.module').then(m => m.LoanModule) },
  // {
  //   path:'product/:id',
  //   component:ProductdetailsComponent
  // },
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
