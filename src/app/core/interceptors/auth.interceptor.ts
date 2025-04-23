// src/app/core/interceptors/auth.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const apiUrl = 'http://localhost:3000'; // ggf. in `environment.ts`
  
    if (req.url.startsWith(apiUrl)) {
      const token = localStorage.getItem('token');
      if (token) {
        const authReq = req.clone({
          setHeaders: { Authorization: `Bearer ${token}` }
        });
        return next.handle(authReq);
      }
    }
  
    return next.handle(req);
  }
  
}
