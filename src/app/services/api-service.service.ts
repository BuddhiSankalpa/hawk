import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService{

  constructor(private http: HttpClient) { }

  //auth
  register(regObj: any):Observable<any>{
    return this.http.post(`${baseUrl}/auth/register`, regObj);
  }

  login(email: any, password: any):Observable<any>{
    return this.http.post(`${baseUrl}/auth/login?email=${email}&password=${password}`,{});
  }

  verify(email: any, verificationCode: any):Observable<any>{
    return this.http.post(`${baseUrl}/auth/verify?email=${email}&verificationCode=${verificationCode}`,{});
  }

  reset(email: any):Observable<any>{
    return this.http.post(`${baseUrl}/auth/reset?email=${email}`,{});
  }

  //annoubcements
  getNewsLine() : Observable<any>{
    return this.http.get(`${baseUrl}/announcements/news/getAll`);
  }

  getAnnouncements() : Observable<any>{
    return this.http.get(`${baseUrl}/announcements/webinars/getAll`);
  }

  //profile
  update(profile: any):Observable<any>{
    return this.http.post(`${baseUrl}/profile/update`, profile);
  }
}
