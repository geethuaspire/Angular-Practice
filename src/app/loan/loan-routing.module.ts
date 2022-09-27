import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanComponent } from './loan.component';
import { SalariedComponent } from './salaried/salaried.component';
import { SelfEmployedComponent } from './self-employed/self-employed.component';

const routes: Routes = [
  {
     path: '', 
     component: LoanComponent
  },
  {
    path:'salaried',
    component:SalariedComponent
  },
  {
    path:'selfEmployed',
    component:SelfEmployedComponent
  }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule { }
