import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

import { JwtInterceptorInterceptor } from './jwt-interceptor.interceptor';

describe('JwtInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [
      JwtInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JwtInterceptorInterceptor = TestBed.inject(JwtInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });

  
});
