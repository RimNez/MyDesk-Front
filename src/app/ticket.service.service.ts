import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private baseUrl = 'http://localhost:8085/api/ticket';
  constructor(private http: HttpClient) { }

  getTicket(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTicket(ticket: Object): Observable<Object> {
    console.log(ticket)
    return this.http.post(`${this.baseUrl}/`, ticket);
  }

  updateTicket(ticket: object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update`, ticket);
  }

  deleteTicket(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getTicketsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }
}
