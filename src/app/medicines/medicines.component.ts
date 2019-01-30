import { Component, OnInit, OnChanges } from '@angular/core';
import { MasterService } from '../master.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {
  constructor(private med:MasterService,private router:Router) {
    
   }
  data:any[]=[];
  data1:any={};
  category:string;
  medicine:string;
  price:string;
  quantity:string;
  expiry:string;
  searchTerm:string;
  p:number;
  
  ngOnInit(){
    this.med.sendToMedicine().subscribe(temp=>{
      if(temp['message']=="Tokken is not valid")
      {
       this.router.navigate(['home/login'])
       }
      else{ 
      this.data=temp
    }
    })
    
  }


  add(v)
  {
    this.category=v;
    this.medicine=v;
    this.price=v;
    this.quantity=v;
    this.expiry=v;
    this.data.push(v);
    this.med.receiveFromMedicine(v);
    this.category=" ";
    this.medicine=" ";
    this.price=" ",
    this.quantity=" ";
    this.expiry=" ";
    
  }
  delete(v,p)
  {
    this.data.splice(p,1);
   this.med.receiveFromMedicine2(v).subscribe(temp=>(temp)); 
  }
  edit(v)
  {
    this.data1=v;
  }
  save()
  {
    this.med.receiveFromMedicine1(this.data1)
    console.log(this.data1);
  }

}
