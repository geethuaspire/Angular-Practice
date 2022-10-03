import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { SigninService } from './signin.service';

const EXEMPTIONS: any = [];
@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
  constructor(private signinservice: SigninService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url } = req;
    if (this.shouldIntercept(url)) {
      req = req.clone({
        // headers: req.headers.append(
        // 'Authorization',
        // `Bearer ${this.signinservice.getAuthToken()}`
        // ),
      });
    }
    return next.handle(req);
  }
  private shouldIntercept(url: string) {
    for (const exemption of EXEMPTIONS) {
      if (url.endsWith(exemption)) {
        return false;
      }
    }
    return true;
  }
}
