import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  data:object;
  data1:string;
  constructor(private http:HttpClient) { 
    
  }

  receiveFromLogin(v):Observable<any>
  {
    console.log(v)
    this.data=v;
    return this.http.post('api/home/login',v);
  }

   sendToPharma()
   {
     return this.data;
     
   }
}
