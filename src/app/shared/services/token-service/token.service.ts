import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { logInForm, signUpForm } from '../../models/security.model';
import { UserModel } from '../../models/user.model';
import { ServiceRecordService } from '../budget-service/service-record.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  
  constructor(private http: HttpClient, private budgetService:ServiceRecordService, private router: Router) {}
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

  

  saveUserToLocal(user: UserModel){
    this.userProfile.next(user);    
    localStorage.setItem('token', JSON.stringify(user.token)?.replace(/['"]+/g, ''));
    localStorage.setItem('user', JSON.stringify(user.email)?.replace(/['"]+/g, ''));    
  }

  public verifyLogged():boolean{
    const token = localStorage.getItem('token');
    return !!token;
  }

 public logout():void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('budget');
    this.router.navigate(['/login']);
  }


}
