

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private baseUrl = 'http://localhost:4200'; // Adjust the base URL as needed

  constructor(private http: HttpClient) {}

  getTranslatedMessage(key: string): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/api/messages?key=${key}`);
  }
}
