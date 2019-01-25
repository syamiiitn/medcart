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
    this.http.post('admin/medicines',v).subscribe(temp=>alert(temp));
  }

  receiveFromMedicine1(v)
  {
   this.http.put('admin/medicines',v).subscribe(temp=>alert(temp));
  }

    receiveFromMedicine2(v):Observable<any>
    {
      var httpOptions={
                    headers:new HttpHeaders({'content-type':'application/json'}),
                    body:v
      }
     return  this.http.delete('admin/medicines',httpOptions)
    }

  sendToMedicine():Observable<any>
  {
    return this.http.get('admin/medicines');
  }

  sendToStock():Observable<any>
  {
    return this.http.get('admin/stock');
  }

  sendToHomePharma():Observable<any>
  {
    return this.http.get('home/pharma');
  }



}
