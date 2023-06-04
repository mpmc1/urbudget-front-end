import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { logInForm, signUpForm } from '../models/security.model';
import { UserModel } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  
  constructor(private http: HttpClient) {}
  userProfile: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>({
    email: '',
    token: '',
  });
  
    
  signUp(signUpForm:signUpForm):Observable<any>{
    return this.http.post<any>('http://localhost:8080/register', signUpForm);
  }

  logIn(logInForm:logInForm):Observable<any>{
    return this.http.post<any>('http://localhost:8080/authenticate', logInForm);
  }

  /* profile(): Observable<UserModel>{
    return this.http.get<UserModel>('http://localhost:8080/api/v1/users/'+ UserModel.email, {withCredentials:true, });
  } */

  saveUserToLocal(user: UserModel){
    this.userProfile.next(user);    
    localStorage.setItem('token', JSON.stringify(user.token));
    localStorage.setItem('user', JSON.stringify(user.email));
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');    
  }


}
