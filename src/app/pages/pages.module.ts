import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SharedModule } from '../shared/shared.module';

const PAGES=[
  DashboardComponent,
  LoginComponent,
  SignUpComponent
]

@NgModule({
  declarations: [PAGES],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[PAGES]
})
export class PagesModule { }
