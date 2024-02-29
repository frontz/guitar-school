import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses =
    [{"title":"Kurs 1","desc":"Opis kursu 1","course_url":"http://127.0.0.1:8000/api/course/9/","author":{"first_name":"Admin","last_name":"Kowalski","email":"admin.kowalski@gmail.com"},"image":"https://www.couplandleather.co.uk/cdn/shop/products/WhatsAppImage2022-01-14at14.46.57_3_1600x1066.jpg?v=1642188207","level":"intermidiate"},
    {"title":"Kurs 2","desc":"Opis kursu 2","course_url":"http://127.0.0.1:8000/api/course/40/","author":{"first_name":"Admin","last_name":"Kowalski","email":"admin.kowalski@gmail.com"},"image":"https://www.couplandleather.co.uk/cdn/shop/products/WhatsAppImage2022-01-14at14.46.57_3_1600x1066.jpg?v=1642188207","level":"beginner"},
    {"title":"Kurs 3","desc":"Opis kursu 3","course_url":"http://127.0.0.1:8000/api/course/71/","author":{"first_name":"Admin","last_name":"Kowalski","email":"admin.kowalski@gmail.com"},"image":"https://www.couplandleather.co.uk/cdn/shop/products/WhatsAppImage2022-01-14at14.46.57_3_1600x1066.jpg?v=1642188207","level":"beginner"},
    {"title":"Kurs 4","desc":"Opis kursu 4","course_url":"http://127.0.0.1:8000/api/course/102/","author":{"first_name":"Admin","last_name":"Kowalski","email":"admin.kowalski@gmail.com"},"image":"https://www.couplandleather.co.uk/cdn/shop/products/WhatsAppImage2022-01-14at14.46.57_3_1600x1066.jpg?v=1642188207","level":"beginner"},
    {"title":"Kurs 5","desc":"Opis kursu 5","course_url":"http://127.0.0.1:8000/api/course/133/","author":{"first_name":"Admin","last_name":"Kowalski","email":"admin.kowalski@gmail.com"},"image":"https://www.couplandleather.co.uk/cdn/shop/products/WhatsAppImage2022-01-14at14.46.57_3_1600x1066.jpg?v=1642188207","level":"beginner"},
    {"title":"Kurs Bluesa","desc":"Kurs Bluesa","course_url":"http://127.0.0.1:8000/api/course/1008/","author":{"first_name":"Admin","last_name":"Kowalski","email":"admin.kowalski@gmail.com"},"image":"https://www.couplandleather.co.uk/cdn/shop/products/WhatsAppImage2022-01-14at14.46.57_3_1600x1066.jpg?v=1642188207","level":"beginner"}]


  constructor() { }

  getCourses() {
    return this.courses;
  }
}
