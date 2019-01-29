import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  receiveFromMedicine(v)
  {
    this.http.post('api/admin/medicines',v).subscribe(temp=>alert(temp));
  }

  receiveFromMedicine1(v)
  {
   this.http.put('api/admin/medicines',v).subscribe(temp=>alert(temp));
  }

    receiveFromMedicine2(v):Observable<any>
    {
      var httpOptions={
                    headers:new HttpHeaders({'content-type':'application/json'}),
                    body:v
      }
     return  this.http.delete('api/admin/medicines',httpOptions)
    }

  sendToMedicine():Observable<any>
  {
    return this.http.get('api/admin/medicines');
  }

  sendToStock():Observable<any>
  {
    return this.http.get('api/admin/stock');
  }

  sendToHomePharma():Observable<any>
  {
    return this.http.get('api/home/pharma');
  }



}
