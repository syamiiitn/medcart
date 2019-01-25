import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  data:object;
  constructor(private http:HttpClient) { 
    
  }

  receiveFromLogin(v):Observable<any>
  {
    this.data=v;
    return this.http.post('home/login',v);
  }

  sendToPharma()
  {
    return this.data;
  }
}
