import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Message {
  _id?: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status?: 'unread' | 'read' | 'archived';
  createdAt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private http = inject(HttpClient);
  // Assuming environment.apiUrl is defined, otherwise fallback to localhost
  private apiUrl = 'http://localhost:5000/api/messages';

  sendMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(this.apiUrl, message);
  }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.apiUrl);
  }

  deleteMessage(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  markAsRead(id: string): Observable<Message> {
    return this.http.put<Message>(`${this.apiUrl}/${id}/status`, { status: 'read' });
  }
  
  updateStatus(id: string, status: string): Observable<Message> {
    return this.http.put<Message>(`${this.apiUrl}/${id}/status`, { status });
  }
}
