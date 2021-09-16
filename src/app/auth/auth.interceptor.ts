import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent
  } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { tap } from 'rxjs/operators';
  import { Injectable } from '@angular/core';
  import { Router } from '@angular/router';
  
  @Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) {}
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
      if (sessionStorage.getItem('doks-webapp-token') != null) {
        const clonedreq = req.clone({
          headers: req.headers.set(
            'Authorization',
            'Bearer ' + sessionStorage.getItem('doks-webapp-token')
          )
        });
        return next.handle(clonedreq).pipe(
          tap(
            succ => {},
            err => {
              if (err.status === 401) {
                // this.router.navigateByUrl('/login');
              } else if ((err.status = 403)) {
                // this.router.navigateByUrl('/forbidden');
                // alert(err.localStorage.getItem('userToken'));
              }
            }
          )
        );
      } else {
        return next.handle(req.clone());
      }
    }
  }