import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'product',
    component:ProductComponent,
    canActivate:[AuthguardGuard],
    canActivateChild:[AuthguardGuard],
    children:[
      {
        path:'edit/:id',
        component:ProductEditComponent
      },
      {
        path:'delete/:id',
        component:ProductDeleteComponent
      }
    ]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
 
  { path: 'loan', loadChildren: () => import('./loan/loan.module').then(m => m.LoanModule) },
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
