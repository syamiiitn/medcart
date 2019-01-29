import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../userdetails.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  data:object[]=[];
  searchTerm:string;
  constructor(private ud:UserdetailsService) { }

  ngOnInit() {
    this.ud.sendToUserdetails().subscribe(temp=>{this.data=temp})
  }

}
