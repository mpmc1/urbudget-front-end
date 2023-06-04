import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout/layout.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptorInterceptor } from './token/interceptor/jwt-interceptor.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,  
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptorInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
