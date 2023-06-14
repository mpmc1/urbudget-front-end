import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { TokenService } from 'src/app/shared/services/token-service/token.service';
import { UserModel } from 'src/app/shared/models/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  
  public logInForm !: FormGroup
  state: string = 'none';
  
  constructor(private formBuilder: FormBuilder,  private router: Router, private tokenService:TokenService) { 
    
  }
  ngOnInit(): void {
    this.logInForm = this.formBuilder.group({      
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
    this.tokenService.logout();    
  } 

  logIn(){
    this.tokenService.logIn(this.logInForm.value).subscribe({
      next: (user: UserModel) => {
        user.email = this.logInForm.get(['username'])?.value;
        this.tokenService.saveUserToLocal(user);
        alert('Wellcome');
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        alert('Login Failed');
      }
    })    
  }

}
