import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserCoursesService {

  constructor(private http: HttpClient) { }

  getMyCourses() {
    return this.http.get(`${environment.apiUrl}/mycourse/`);
  }



}
