import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ContentService {
  URL = 'http://localhost:9000/content';
  constructor(private http: HttpClient) {}

  get(belongsTo): Observable<any> {
    return this.http.get(`${this.URL}/all/${belongsTo}`);
  }
}
