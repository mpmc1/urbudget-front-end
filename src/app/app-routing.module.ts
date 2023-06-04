import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    
    children:[
      {
        path:'login',
        component:LoginComponent,
      },
      {
        path:'signUp',
        component:SignUpComponent,
      },
      {
        path:'dashboard',
        component:DashboardComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
