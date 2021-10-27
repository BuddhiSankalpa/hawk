import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  // confirmPayment(reqId: any):Observable<any>{
  //   return this.http.get(`${baseUrl}/payment-confirmation?reqid=${reqId}`, {responseType: 'text'});
  // }

  confirmPayment(reqId: any):Observable<any>{
    let authToken = "4db8e016-0bd1-4e46-b942-79203eb17e13";
    let baseUrl = "https://sampath.paycorp.lk/webinterface/qw/confirm";
    let confirmUrl = baseUrl + "?csrfToken=" + reqId + "&authToken=" + authToken;

    let headers: {
      "Access-Control-Allow-Origin": "https://doksinternational.com",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }

    return this.http.post(confirmUrl, '', {headers: headers});
  }
}
