import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http:HttpClient) { }


  
  receiveFromRegistration(v):Observable<any>
  {
    return this.http.post('api/home/signup',v);
  }

}
