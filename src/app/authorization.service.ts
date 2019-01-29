import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable()
export class AuthorizationService implements HttpInterceptor{ 
  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>
  {
    const idToken=localStorage.getItem("id_Token");
    
    //if token found,clone it to request object at header
    if(idToken)
    {
      const cloned=req.clone({
        headers:req.headers.set('authorization','Bearer '+idToken)
      }
      );
      console.log(cloned);
    return next.handle(cloned) ; 
    }
    else{
      return next.handle(req);
    }

  }
  

}
