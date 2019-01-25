import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MasterService } from '../master.service';
import { LoginService } from '../login.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-pharma',
  templateUrl: './pharma.component.html',
  styleUrls: ['./pharma.component.css']
})
export class PharmaComponent implements OnInit {
  data:object[]=[];
  data1:object={};
  s:object={};
  quant:number=1;
  p:number;
  constructor(private ms:MasterService,private ds:CartService,private ls:LoginService) {
   }
  ngOnInit() {
     this.ms.sendToHomePharma().subscribe(temp=>{this.data=temp});
     this.s=this.ls.sendToPharma()
     console.log(this.s);
   }
   send1(v)
   {
     console.log(v);
    this.data1=v;
   }

   send(category,medicine,price,expiry,quant,amount,username)
   {
     this.ds.receiveFromPharma({category,medicine,price,expiry,quant,amount,username});
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
