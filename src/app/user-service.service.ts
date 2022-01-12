import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = 'http://localhost:8085/api/user';

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }

  createUser(user: Object): Observable<Object> {
    console.log(user);
    return this.http.post(`${this.baseUrl}/`, user);
  }

  signInUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/login`, user);
  }
  signInAdmin(admin: Object): Observable<Object> {
    return this.http.post(`http://localhost:8085/api/Admin/login`, admin);
  }

  updateUser(value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/`, value);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/id/${id}`, { responseType: 'text' });
  }

  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }


}
