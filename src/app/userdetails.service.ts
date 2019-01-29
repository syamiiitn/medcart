import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  constructor(private http:HttpClient) { }

  sendToUserdetails():Observable<any>{
    return this.http.get('api/admin/userdetails');
  }

}

