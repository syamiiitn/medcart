import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  s2:any[]=[];
  searchTerm:string;
  p:number;
  constructor(private ms:MasterService,private router:Router) {
   }

  ngOnInit() {
    this.ms.sendToStock().subscribe(temp=>{
      if(temp['message']=="Tokken is not valid")
      {
       this.router.navigate(['home/login'])
       }
       else{
    this.s2=temp
       }
  })
    console.log(this.s2);
  }

}
