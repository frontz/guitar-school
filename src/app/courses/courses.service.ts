import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  api = 'https://test.szkola-gitary.pl/api';

  getCourses() {
    return this.http.get(`${this.api}/course/`);
  }

  getCourseDetails(id: number) {
    return this.http.get(`${this.api}/course/${id}/`);
  }
}
