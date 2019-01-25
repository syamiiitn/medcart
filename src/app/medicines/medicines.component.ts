import { Component, OnInit, OnChanges } from '@angular/core';
import { DataService } from '../data.service';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {
  constructor(private med:MasterService) {
    
   }
  data:object[]=[];
  data1:object[]=[];
  category:string;
  medicine:string;
  price:string;
  quantity:string;
  expiry:string;
  searchTerm:string;
   
  ngOnInit(){
    this.med.sendToMedicine().subscribe(temp=>{this.data=temp})
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
  delete(v)
  {
   this.med.receiveFromMedicine2(v).subscribe(temp=>{this.data=temp}); 
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
