import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private http: HttpClient) { }

  public subscribe(name: string, email: string) {
    return this.http.post<any>(`${environment.apiUrl}/newsletter/subscribe/`, {"name": name, "email": email});
  }
}
