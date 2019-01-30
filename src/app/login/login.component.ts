import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import * as jwt_decode from 'jwt-decode';
import { decode } from '@angular/router/src/url_tree';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  data1:boolean=false;
  data2:boolean=false;
  s:string;
  constructor(private router:Router,private login:LoginService) {
   }
   username:string;
   password:string;
   
  ngOnInit() {
    
  }

add(v){
    this.login.receiveFromLogin(v).subscribe(res=>{
    if(res=="Invalid username")
     {
       this.router.navigate(['home/login']);
       this.data1=!this.data1;
     }
    else if(res=="wrong password")
    {
      this.router.navigate(['/home/login']);
      this.data2=!this.data2;
    }
   else if(res['message']==="logged in successfully") 
   {
      localStorage.setItem('id_Token',res['idToken']);
      this.s=res;
      if(res['idToken']!==null)
        {
        if(v.username=="sivachandraraju" && v.password=="sivachandra@422"){
          this.router.navigate(['admin']);
         }
    
        else{
         this.router.navigate(['user'])
         }
        } 
    else{
      this.router.navigate(['home/login'])
    }
  }
  else{
    this.router.navigate(['home/login'])
  }
  })
  }

  move()
  {
    this.router.navigate(['home/signup'])
  }

}
