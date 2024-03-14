import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCoursesService {

  api = 'https://test.szkola-gitary.pl/api';

  constructor(private http: HttpClient) { }

  getMyCourses() {
    return this.http.get(`${this.api}/mycourse/`);
  }

  getMyCourseDetails(id: number) {
    return this.http.get(`${this.api}/mycourse/${id}/`);
  }

}
