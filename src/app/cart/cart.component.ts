import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  s:object[]=[];
  s1:object={};
  constructor(private ds:CartService,private ls:LoginService) { 
  }
  ngOnInit() {

    this.ds.sendToCart(this.s1).subscribe(temp=>{this.s=temp})
    this.s1=this.ls.sendToPharma();
  }

  delete(v,p)
  {
    this.s.splice(p,1);
    this.ds.receiveFromCart(v)
  }
}
