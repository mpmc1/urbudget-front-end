import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { TokenService } from 'src/app/shared/services/token.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  public signUpForm !: FormGroup
  constructor(private formBuilder: FormBuilder,  private router: Router, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({      
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })

  } 

  logIn(){
    this.tokenService.signUp(this.signUpForm.value)
    .subscribe(res=>{
      alert("Loged In")
      this.router.navigate(['/dashboard'])
    },err=>{
      alert("Something went wrong")
    })
  }
}
