import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RestApiService {

  constructor(private http: HttpClient) { }
  headers=new(HttpHeaders)
  getHeaders() {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders().set('Authorization', token) : null;
  }

  get(link: string) {
    return this.http.get(link).toPromise();
  }

  post(link: string, body: any) {
    return this.http.post(link, body).toPromise();
  }
}
