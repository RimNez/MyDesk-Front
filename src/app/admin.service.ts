import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://finalpfabackend-env.eba-qbn8satq.us-east-1.elasticbeanstalk.com/api/admin';
  
  constructor(private http: HttpClient) {}

  getAdmin(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }

  createAdmin(admin: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/`, admin);
  }

  signInAdmin(admin: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/signIn`, admin);
  }

  updateAdmin(value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/`, value);
  }

  deleteAdmin(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/id/${id}`, { responseType: 'text' });
  }

  getAdminList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }
}
