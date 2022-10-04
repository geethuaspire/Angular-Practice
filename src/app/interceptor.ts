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

const EXEMPTIONS: any = {
  'account-user-role-id': [
    'views/',
    'i18n/',
    '/site/register',
    '/site/verify',
    '/countries',
    '/industries',
    '/timezones',
    '/years',
    '/counts',
    '/site/login',
    '/site/adminlogin',
    '/site/recover',
    '/site/reset',
    '/reminders',
    '/code',
    '/user/userupdate',
    '/site/activate',
    '/users/details',
  ],

  auth: [
    'views/',
    'i18n/',
    '/site/register',
    '/site/verify',
    '/site/lang',
    '/site/login',
    '/site/adminlogin',
    '/site/recover',
    '/site/reset',
    '/site/activate',
    '/site/integratemesser',
  ],

  lan: ['views/', 'i18n/'],
};

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
  // var currentUserAccountRole = BrowserStorageService.user.accountRoleID.value;
  //     var authKey = BrowserStorageService.user.authKey.value;
  //     var currentLanguageId = LanguageService.getCurrentLanguage().id + 1;
  constructor(private signinservice: SigninService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url } = req;

    if (!this.isUrlInArray(req.url, EXEMPTIONS['auth'])) {
      req = req.clone({
        setHeaders: {
          //'Authorization': `Bearer ${this.signinservice.getAuthToken()}`,
        },
      });
    }

    if (!this.isUrlInArray(req.url, EXEMPTIONS['accountid'])) {
      req = req.clone({
        setHeaders: {
          'account-user-role-id': 'currentUserAccountRole',
        },
      });
    }

    if (!this.isUrlInArray(req.url, EXEMPTIONS('lan'))) {
      req = req.clone({
        setHeaders: {
          lan: 'currentLanguageId',
        },
      });
    }
    return next.handle(req);
  }

  isUrlInArray(url: string, arr: any) {
    var index;

    for (index in arr) {
      if (url.search(arr[index]) !== -1) {
        return true;
      }
    }

    return false;
  }
}

