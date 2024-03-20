import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserCoursesService {

  api = 'https://test.szkola-gitary.pl/api';

  constructor(private http: HttpClient, private authSevice: AuthService) { }

  getMyCourses() {
    return this.http.get(`${environment.apiUrl}/mycourse/`)
    .pipe(
      catchError(error => {
        if (error.status === 401) {
          return this.authSevice.refreshToken().pipe(
            switchMap(() => {
              return this.http.get(`${this.api}/mycourse/`);
            })
          );
        } else {
          return throwError(error);
        }
      })
    )
  }

  getMyCourseDetails(id: number) {
    return this.http.get(`${environment.apiUrl}/mycourse/${id}/`)
    .pipe(
      catchError(error => {
        if (error.status === 401) {
          return this.authSevice.refreshToken().pipe(
            switchMap(() => {
              return this.http.get(`${this.api}/mycourse/`);
            })
          );
        } else {
          return throwError(error);
        }
      })
    )
  }

}
