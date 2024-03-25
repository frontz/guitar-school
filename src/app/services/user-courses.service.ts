import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserCoursesService {

  constructor(private http: HttpClient, private authSevice: AuthService) { }

  getMyCourses() {
    let token = localStorage.getItem('access_token');
    return this.http.get(`${environment.apiUrl}/mycourse/`, {headers: {'Authorization': `Bearer ${token}` }})
    .pipe(
      catchError(error => {
        if (error.status === 401) {
          return this.authSevice.refreshToken().pipe(
            switchMap(() => {
              let newToken = localStorage.getItem('access_token');
              return this.http.get(`${environment.apiUrl}/mycourse/`, {headers: {'Authorization': `Bearer ${newToken}` }});
            })
          );
        } else {
          return throwError(error);
        }
      })
    )
  }

  getMyCourseDetails(id: number) {
    let token = localStorage.getItem('access_token');
    return this.http.get(`${environment.apiUrl}/mycourse/${id}/`, {headers: {'Authorization': `Bearer ${token}` }})
    .pipe(
      catchError(error => {
        if (error.status === 401) {
          return this.authSevice.refreshToken().pipe(
            switchMap(() => {
              let newToken = localStorage.getItem('access_token');
              return this.http.get(`${environment.apiUrl}/mycourse/`, {headers: {'Authorization': `Bearer ${newToken}` }});
            })
          );
        } else {
          return throwError(error);
        }
      })
    )
  }

}
