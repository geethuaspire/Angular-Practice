import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { QueryComponent } from './query/query.component';
import { PaymentComponent } from './payment/payment.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { DebitcardComponent } from './debitcard/debitcard.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ContactusComponent,
    ProductdetailsComponent,
    RegisterComponent,
    QueryComponent,
    PaymentComponent,
    CreditcardComponent,
    DebitcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
