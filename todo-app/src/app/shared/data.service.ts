import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class CardService  {
  private apiUrl = 'http://localhost:3000/frameworks';

  constructor(private http: HttpClient) {}

  getFrameworks(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrl);
  }
}