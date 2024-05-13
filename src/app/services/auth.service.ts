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
    localStorage.setItem(key, JSON.stringify(item));
  }

  public login(email: string, password: string) {
    
    return this.http.post<any>(`${environment.apiUrl}/user/login/`, {"email": email,  "password": password})
    .pipe(map(res => {
                console.log(res);
                localStorage.setItem('access_token', res.access  );
                localStorage.setItem('refresh_token', res.refresh);
                this.setWithExpiry('user', res.user.first_name, this.timeToExpiry); 
            }));
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

  changePassword(currentPassword: string, newPassword: string) {
    let token = localStorage.getItem('access_token');
    return this.http.post<any>(`${environment.apiUrl}/user/password/change/`, {"current_password": currentPassword,  "new_password": newPassword}, {headers: {'Authorization': `Bearer ${token}` }})
    .pipe(
      catchError(error => {
        if (error.status === 401) {
          return this.refreshToken().pipe(
            switchMap(() => {
              let newToken = localStorage.getItem('access_token');
              return this.http.post<any>(`${environment.apiUrl}/user/password/change`, {"current_password": currentPassword,  "new_password": newPassword}, {headers: {'Authorization': `Bearer ${newToken}` }})
            })
          );
        } else {
          return throwError(error);
        }
      })
    )
  }

  sendPasswordResetLink(email: string) {
    return this.http.post<any>(`${environment.apiUrl}/user/password/reset/`, {"email": email});
  }

  confirmPassword(newPassword: string, uuid: string, token: string) {
    return this.http.post<any>(`${environment.apiUrl}/user/password/reset/confirm/`, {"new_password": newPassword, "uidb64": uuid, "token": token});
  }

  logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }
}
