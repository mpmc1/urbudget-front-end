import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ChartsComponent } from './charts/charts.component'; 
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


const PAGES=[
  DashboardComponent,
  LoginComponent,
  SignUpComponent,  
  
]

@NgModule({
  declarations: [PAGES, ChartsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports:[PAGES]
})
export class PagesModule { }
