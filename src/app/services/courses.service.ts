import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get(`${environment.apiUrl}/course/`);
  }

  getCourseDetails(id: number) {
    return this.http.get(`${environment.apiUrl}/course/${id}/`);
  }
}
