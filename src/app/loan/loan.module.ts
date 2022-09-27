import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanRoutingModule } from './loan-routing.module';
import { LoanComponent } from './loan.component';
import { SalariedComponent } from './salaried/salaried.component';
import { SelfEmployedComponent } from './self-employed/self-employed.component';


@NgModule({
  declarations: [
    LoanComponent,
    SalariedComponent,
    SelfEmployedComponent
  ],
  imports: [
    CommonModule,
    LoanRoutingModule
  ]
})
export class LoanModule { }
