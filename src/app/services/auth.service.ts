import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { User } from '../models';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;

  auth_token: any;

  constructor(private http: HttpClient, private router: Router)  {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
   }

  public get userValue() {
    return this.userSubject.value;
  }

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

  register(user: string, pass: string, email: string): void {
    console.log(user, pass, email);
  }

  logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }
}
