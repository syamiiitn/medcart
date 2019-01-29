import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { longStackSupport } from 'q';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  constructor(private router:Router) { }

  ngOnInit() {
  }

  
    logout()
    {
      localStorage.removeItem('id_Token')
      this.router.navigate(['/home/login']);
    }

}
