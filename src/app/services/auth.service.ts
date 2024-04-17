import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, switchMap, throwError } from 'rxjs';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  auth_token: any;
  timeToExpiry = 60 * 1000 * 60 * 24;
  user: string | null | undefined;

  constructor(private http: HttpClient, private router: Router)  {}

  httpOptions = {
    headers: new HttpHeaders(
      {'Content-Type': 'application/json'}
      )
  }

  public setWithExpiry(key: string, value: string, ttl: number) {
    const now = new Date()
    const item = {
      value: value,
      expiry: now.getTime() + ttl,
    }
    localStorage.setItem(key, JSON.stringify(item))
  }

  public login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/user/token/`, {"username": username,  "password": password}, {headers: this.httpOptions.headers})
    .pipe(map(res => {
                console.log(res);
                localStorage.setItem('access_token', res.access  );
                localStorage.setItem('refresh_token', res.refresh);
                // localStorage.setItem('user', res.user.first_name);
                // this.setWithExpiry('access_token', res.access, this.timeToExpiry);
                // this.setWithExpiry('refresh_token', res.refresh, this.timeToExpiry);
                this.setWithExpiry('user', res.user.first_name, this.timeToExpiry);
            }));
  }

  public getWithExpiry(key: string) {
    const itemStr = localStorage.getItem(key)
    // if the item doesn't exist, return null
    if (!itemStr) {
      this.user = null;
      return null;
    }
    const item = JSON.parse(itemStr)
    const now = new Date()
    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
      // If the item is expired, delete the item from storage
      // and return null
      localStorage.removeItem(key);
      this.user = null;
      return null;
    }
    this.user = item.value;
    return item.value;
  }

  refreshToken(): Observable<any> {  
    const refreshToken = localStorage.getItem('refresh_token');
    return this.http.post<any>(`${environment.apiUrl}/user/token/refresh/`, { refresh: refreshToken }).pipe(
      map(res => {
        console.log(res);
        localStorage.setItem('access_token', res.access);
      },
      catchError(error => throwError(error))
    ));
  }

  // getUser() {
  //   let token = localStorage.getItem('access_token');
  //   return this.http.get(`${environment.apiUrl}/user/info/`, {headers: {'Authorization': `Bearer ${token}` }})
  //   .pipe(
  //     catchError(error => {
  //       if (error.status === 401) {
  //         return this.refreshToken().pipe(
  //           switchMap(() => {
  //             let newToken = localStorage.getItem('access_token');
  //             return this.http.get(`${environment.apiUrl}/user/info/`, {headers: {'Authorization': `Bearer ${newToken}` }});
  //           })
  //         );
  //       } else {
  //         return throwError(error);
  //       }
  //     })
  //   )
  // }

  logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }
}
