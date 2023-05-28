import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { logInForm, signUpForm } from '../models/security.model';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  
  constructor(private http: HttpClient) { }
    
  signUp(signUpForm:signUpForm):Observable<any>{
    return this.http.post<any>('http://localhost:8080/register',signUpForm)
  }

  login(logInForm:logInForm):Observable<any>{
    return this.http.post<any>('http://localhost:8080/authenticate',logInForm)
  }


}