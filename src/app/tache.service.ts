import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  private baseUrl = 'http://localhost:3000/projects';
  constructor(private http: HttpClient) { }

  getTache(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTache(ticket: Object): Observable<Object> {
    console.log(ticket)
    return this.http.post(`${this.baseUrl}/`, ticket);
  }

  updateTache(ticket: object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update`, ticket);
  }

  deleteTache(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getTachelist(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }
}
