import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private baseUrl = 'http://localhost:3000/projects';
  constructor(private http: HttpClient) { }

  getMessage(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createMessage(ticket: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, ticket);
  }

  updateMessage(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteMessage(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  //we need getMessageListByTickeyID in the back
  getMessagesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
