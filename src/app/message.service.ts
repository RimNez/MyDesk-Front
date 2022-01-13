import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private baseUrl = 'http://finalpfabackend-env.eba-qbn8satq.us-east-1.elasticbeanstalk.com/api/message';
  constructor(private http: HttpClient) { }

  getMessage(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createMessage(message: Object): Observable<Object> {
    console.log(message)
    return this.http.post(`${this.baseUrl}/`, message);
  }

  updateMessage(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteMessage(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getMessagesList(id:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
