import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PharmaComponent } from './pharma/pharma.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { Home1Component } from './home1/home1.component';
import { AdminComponent } from './admin/admin.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { StockComponent } from './stock/stock.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from './cart/cart.component';
import { DiseasesComponent } from './diseases/diseases.component';

const routes: Routes = [{path:'home',component:HomeComponent,
children:[
  {path:'home1',component:Home1Component},
  {path:'pharma',component:PharmaComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
]},

{path:'user',component:UserComponent,children:[{path:'',component:DiseasesComponent},{path:'diseases',component:DiseasesComponent},
{path:'pharma',component:PharmaComponent},
{path:'cart',component:CartComponent},
{path:'contactus',component:ContactusComponent}]},


{path:'admin',component:AdminComponent,children:[{path:'',component:StockComponent},{path:'stock',component:StockComponent},
{path:'medicines',component:MedicinesComponent},{path:'userdetails',component:UserdetailsComponent},{path:'transactions',component:TransactionsComponent}]},
{path:'',redirectTo:'home/home1',pathMatch:'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
