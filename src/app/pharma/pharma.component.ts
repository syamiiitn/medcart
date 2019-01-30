import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service';
import { LoginService } from '../login.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pharma',
  templateUrl: './pharma.component.html',
  styleUrls: ['./pharma.component.css']
})
export class PharmaComponent implements OnInit {
  data:any[]=[];
  data1:any={};
  quant:number=1;
  p:number;
  searchTerm:string;
  category:string;
  medicine:string;
  price:string;
  expiry:string;
  username:string;
  quantity:string;
  amount:number;
  constructor(private ms:MasterService,private ds:CartService,private router:Router) {
   }
  ngOnInit() {
     this.ms.sendToHomePharma().subscribe(temp=>{this.data=temp});
   }
   send1(v)
   {
    this.data1=v;
   }

   send(category,medicine,price,expiry,quantity,quant,amount)
   {
     this.category=category;
     this.medicine=medicine;
     this.price=price;
     this.expiry=expiry;

    if(localStorage.getItem('id_Token')==null)
    {
      this.router.navigate(['/home/login'])
    }
    else{
    this.ds.receiveFromPharma({category,medicine,price,expiry,quantity,quant,amount});
    }
    }

   inc(v)
  {
    this.quant=this.quant+1;
  }

  dec(v)
  {
    this.quant=this.quant-1;
  }





}
