import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { StockComponent } from './stock/stock.component';
import { SalesComponent } from './sales/sales.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { PharmaComponent } from './pharma/pharma.component';
import { CartComponent } from './cart/cart.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { Home1Component } from './home1/home1.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { DiseasesComponent } from './diseases/diseases.component';
import { TabletsComponent } from './tablets/tablets.component';
import { SyrupsComponent } from './syrups/syrups.component';
import { VitaminsComponent } from './vitamins/vitamins.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchPipe } from './search.pipe';
import { Search1Pipe } from './search1.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
    AboutusComponent,
    ContactusComponent,
    StockComponent,
    SalesComponent,
    UserdetailsComponent,
    TransactionsComponent,
    PharmaComponent,
    CartComponent,
    ForgotpasswordComponent,
    Home1Component,
    MedicinesComponent,
    DiseasesComponent,
    TabletsComponent,
    SyrupsComponent,
    VitaminsComponent,
    SearchPipe,
    Search1Pipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
