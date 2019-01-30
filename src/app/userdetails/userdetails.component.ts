import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../userdetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  data:object[]=[];
  searchTerm:string;
  constructor(private ud:UserdetailsService,private router:Router) { }

  ngOnInit() {
    this.ud.sendToUserdetails().subscribe(temp=>{
      if(temp['message']=="Tokken is not valid")
      {
       this.router.navigate(['home/login'])
       }
       else{
       this.data=temp
      }
    })
  }

}
