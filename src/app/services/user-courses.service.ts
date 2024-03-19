import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserCoursesService {

  api = 'https://test.szkola-gitary.pl/api';

  constructor(private http: HttpClient, private authSevice: AuthService) { }

  getMyCourses() {
    const token = localStorage.getItem('access_token');
    return this.http.get(`${this.api}/mycourse/`, { headers: { 'Authorization': `Bearer ${token}` } })
    .pipe(
      catchError(error => {
        if (error.status === 401) {
          return this.authSevice.refreshToken().pipe(
            switchMap(() => {
              const newToken = localStorage.getItem('access_token');
              return this.http.get(`${this.api}/mycourse/`, { headers: { 'Authorization': `Bearer ${newToken}` } });
            })
          );
        } else {
          return throwError(error);
        }
      })
    )
  }

  getMyCourseDetails(id: number) {
    const token = localStorage.getItem('access_token');
    return this.http.get(`${this.api}/mycourse/${id}/`, { headers: { 'Authorization': `Bearer ${token}` }})
    .pipe(
      catchError(error => {
        if (error.status === 401) {
          return this.authSevice.refreshToken().pipe(
            switchMap(() => {
              const newToken = localStorage.getItem('access_token');
              return this.http.get(`${this.api}/mycourse/`, { headers: { 'Authorization': `Bearer ${newToken}` } });
            })
          );
        } else {
          return throwError(error);
        }
      })
    )
  }

}
