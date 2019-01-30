import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }


  receiveFromPharma(v)
  {
    this.http.post('api/user/pharma',v).subscribe();
  }

  sendToCart():Observable<any>
  {
   return this.http.get('api/user/cart'); 
  }

    receiveFromCart(v):Observable<any>
    {
      var httpOptions={
        headers:new HttpHeaders({'content-type':'application/json'}),
        body:v
        
        }
    
    return  this.http.delete('api/user/cart',httpOptions)
    }

}
