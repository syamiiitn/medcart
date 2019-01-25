import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstname:string;
  lastname:string;
  username:string;
  email:string;
  password:string;
  gender:string;
  
  constructor(private register:RegisterService,private router:Router) { }

  ngOnInit() {
  }

  add(v)
  {
    this.register.receiveFromRegistration(v).subscribe(temp=>{alert(temp)
    if(temp=="registered successfully")
      {
        this.router.navigate(['/home/login']);
      }
     else if(temp=="username alredy existed...please select another username") {
      this.router.navigate(['/home/signup']);
     }
  });
  }

}
