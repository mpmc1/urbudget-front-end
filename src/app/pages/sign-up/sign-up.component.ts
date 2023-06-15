import { Component,OnInit} from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/shared/services/token-service/token.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})


export class SignUpComponent implements OnInit{

  public signUpForm !: FormGroup
  constructor(private formBuilder: FormBuilder,  private router: Router, private tokenService:TokenService, private toast:ToastrService) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  } 

  signUp(){
    this.tokenService.signUp(this.signUpForm.value)
    .subscribe(res=>{
      this.toast.success("Signed Up successfully")
      this.router.navigate(['/login'])
    },err=>{
      console.error(err);
      this.toast.error("Something went wrong")
    })
  }
}
