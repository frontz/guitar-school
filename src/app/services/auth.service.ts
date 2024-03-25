import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, switchMap, throwError } from 'rxjs';
import { User } from '../models';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  auth_token: any;

  constructor(private http: HttpClient, private router: Router)  {}

  httpOptions = {
    headers: new HttpHeaders(
      {'Content-Type': 'application/json'}
      )
  }

  public login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/token/`, {"username": username,  "password": password}, {headers: this.httpOptions.headers})
    .pipe(map(res => {
                console.log(res);
                localStorage.setItem('access_token', res.access);
                localStorage.setItem('refresh_token', res.refresh);
            }));
  }

  refreshToken(): Observable<any> {
    const refreshToken = localStorage.getItem('refresh_token');
    return this.http.post<any>(`${environment.apiUrl}/token/refresh/`, { refresh: refreshToken }).pipe(
      map(res => {
        console.log(res);
        localStorage.setItem('access_token', res.access);
      },
      catchError(error => throwError(error))
    ));
  }

  getInfo() {
    let token = localStorage.getItem('access_token');
    return this.http.get<any>(`${environment.apiUrl}/user/info/`, {headers: {'Authorization': `Bearer ${token}` }})
    .pipe(
      catchError(error => {
        if (error.status === 401) {
          return this.refreshToken().pipe(
            switchMap(() => {
              let newToken = localStorage.getItem('access_token');
              return this.http.get(`${environment.apiUrl}/user/info/`, {headers: {'Authorization': `Bearer ${newToken}` }});
            })
          );
        } else {
          return throwError(error);
        }
      })
    )
  }

  register(user: string, pass: string, email: string): void {
    console.log(user, pass, email);
  }

  logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        this.router.navigate(['/login']);
    }
}
