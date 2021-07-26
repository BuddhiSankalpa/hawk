import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService{

  constructor(private http: HttpClient) { }

  register(regObj: any):Observable<any>{
    return this.http.post(`${baseUrl}/register`, regObj);
  }

  login(email: any, password: any):Observable<any>{
    return this.http.post(`${baseUrl}/auth?email=${email}&password=${password}`,{});
  }

  verify(email: any, verificationCode: any):Observable<any>{
    return this.http.post(`${baseUrl}/verify?email=${email}&verificationCode=${verificationCode}`,{});
  }

  getNewsLine() : Observable<any>{
    return this.http.get(`${baseUrl}/news/getAll`);
  }
}
