import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AspectsService {
  URL = 'http://localhost:9000/aspect';
  constructor(private http: HttpClient) {}

  get(belongsTo): Observable<any> {
    return this.http.get(`${this.URL}/all?belongsTo=${belongsTo}`);
  }
}
