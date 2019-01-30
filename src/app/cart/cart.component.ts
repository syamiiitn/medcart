import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  s:any[];
  s1:object={};
  sum:number=0;
  amount:any;
  constructor(private ds:CartService,private ls:LoginService) { 
  }
  ngOnInit() {

    this.ds.sendToCart().subscribe(temp=>{(this.s=temp);
  })
  }

  delete(v,p)
  {
    this.s.splice(p,1);
    this.ds.receiveFromCart(v).subscribe(temp=>{})
  }
}
