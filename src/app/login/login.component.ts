import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  data1:boolean=false;
  data2:boolean=false;
  constructor(private router:Router,private login:LoginService) {
   }

  ngOnInit() {
    
  }

add(v){
  this.login.receiveFromLogin(v).subscribe(temp=>{(temp)
   if(temp=="Invalid username")
     {
       this.router.navigate(['home/login']);
       this.data1=!this.data1;
     }
    else if(temp=="wrong password")
    {
      this.router.navigate(['/home/login']);
      this.data2=!this.data2;
    }
   else if(temp=="logged in successfully") {
     if(v.username=="sivachandraraju" && v.password=="sivachandra@422"){
      this.router.navigate(['admin']);
     }
    
     else{
       this.router.navigate(['user'])
     }
    
   }
  });
  }

  move()
  {
    this.router.navigate(['home/signup'])
  }

}
