import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  s2:any[]=[];
  searchTerm:string;
  constructor(private ms:MasterService) {
   }

  ngOnInit() {
    this.ms.sendToStock().subscribe(temp=>{this.s2=temp})
    console.log(this.s2);
  }

}
