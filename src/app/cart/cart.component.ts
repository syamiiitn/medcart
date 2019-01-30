import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { CartService } from '../cart.service';
import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  s:any[];
  s1:object={};
  sum:number=0;
  username:string;
  category:string;
  medicine:string;
  price:string;
  expiry:string;
  quant:number;
  quantity:number;
  constructor(private ds:CartService,private ls:LoginService,private router:Router) { 
  }
  ngOnInit() {
    
    this.s1=this.ls.sendToPharma();
    this.ds.sendToCart().subscribe(temp=>{
      if(temp['message']=="Tokken is not valid")
      {
       this.router.navigate(['home/login'])
       }
       else{
          this.s=temp;
          console.log(this.s)
          for(let i of this.s){
          this.sum=this.sum+i.amount;
      }
    }
  })
  }
  purchase()
  {
  }

  delete(v,p)
  {
    this.s.splice(p,1);
    this.ds.receiveFromCart(v).subscribe(temp=>{})
  }
}
