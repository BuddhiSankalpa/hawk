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
import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';

@Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router,
                private toast: ToastrService,
                private modalService: BsModalService) {}

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
              if (err.status === 403) {
                this.toast.warning('Session Expired!');
                this.modalService.hide();
                sessionStorage.clear();
                this.router.navigateByUrl('/account');
              }
            }
          )
        );
      } else {
        return next.handle(req.clone());
      }
    }
  }
