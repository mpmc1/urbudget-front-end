import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { TokenService } from '../../shared/services/token.service';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if (token){
      request = request.clone({
        /* setHeaders: {
          Authorization: 'token ' + token,
       }, */
       headers: request.headers.set("Authorization", "Bearer "+ token)
       
      });
    }
    
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401){
          this.tokenService.logout();
        }
        const error = err.error.message || err.statusText;
        return throwError(error);
      }
      )
    )
  }
}
