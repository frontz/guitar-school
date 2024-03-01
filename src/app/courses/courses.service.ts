import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses = [
    {"title":"Kurs 1","desc":"Opis kursu 1","course_url":"http://127.0.0.1:8000/api/course/9/","author":{"first_name":"Admin","last_name":"Kowalski","email":"admin.kowalski@gmail.com"},"image":null,"level":"intermidiate"},
    {"title":"Kurs 2","desc":"Opis kursu 2","course_url":"http://127.0.0.1:8000/api/course/40/","author":{"first_name":"Admin","last_name":"Kowalski","email":"admin.kowalski@gmail.com"},"image":null,"level":"beginner"},
    {"title":"Kurs 3","desc":"Opis kursu 3","course_url":"http://127.0.0.1:8000/api/course/71/","author":{"first_name":"Admin","last_name":"Kowalski","email":"admin.kowalski@gmail.com"},"image":null,"level":"beginner"},
    {"title":"Kurs 4","desc":"Opis kursu 4","course_url":"http://127.0.0.1:8000/api/course/102/","author":{"first_name":"Admin","last_name":"Kowalski","email":"admin.kowalski@gmail.com"},"image":null,"level":"beginner"},
    {"title":"Kurs 5","desc":"Opis kursu 5","course_url":"http://127.0.0.1:8000/api/course/133/","author":{"first_name":"Admin","last_name":"Kowalski","email":"admin.kowalski@gmail.com"},"image":null,"level":"beginner"},
    {"title":"Kurs Bluesa","desc":"Kurs Bluesa","course_url":"http://127.0.0.1:8000/api/course/1008/","author":{"first_name":"Admin","last_name":"Kowalski","email":"admin.kowalski@gmail.com"},"image":null,"level":"beginner"}
  ]

  details = [
    {"title":"Kurs Bluesa","desc":"Kurs Bluesa",
    "author":{"first_name":"Admin","last_name":"Kowalski","email":"admin.kowalski@gmail.com"},
    "modules":[
      {"title":"Moduł 0 - Wprowadzenie","desc":"Moduł 0 - Wprowadzenie",
      "lessons":[
        {"title":"1 Powitanie","desc":"1 Powitanie"},
        {"title":"2 Opis Kursu","desc":"2 Opis Kursu"},
        {"title":"3 Jak studiować","desc":"3 Jak studiować"},
        {"title":"4 Narzędzia","desc":"4 Narzędzia"}]},
      {"title":"Moduł 1 - Wstęp - ćwiczenia i skale","desc":"Moduł 1 - Wstęp - ćwiczenia i skale",
      "lessons":[
        {"title":"Lekcja 1. Ćwiczenia chromatyczne, rozgrzewające i rozciągające","desc":"Lekcja 1. Ćwiczenia chromatyczne, rozgrzewające i rozciągające"},
        {"title":"Lekcja 2. Skale pentatoniczne. Skala pentatoniczna - bezpółtonowa","desc":"Lekcja 2. Skale pentatoniczne. Skala pentatoniczna - bezpółtonowa"},
        {"title":"Lekcja 3. Skale stosowane w bluesie - miksolidyjska i dorycka","desc":"Lekcja 3. Skale stosowane w bluesie - miksolidyjska i dorycka"},
        {"title":"Lekcja 4. Ćwiczenia staccato w skalach","desc":"Lekcja 4. Ćwiczenia staccato w skalach"},
        {"title":"Lekcja 5. Ćwiczenia z elementami legato w skalach","desc":"Lekcja 5. Ćwiczenia z elementami legato w skalach"},
        {"title":"Lekcja 6. Ćwiczenia w skalach z przemieszczaniem pozycji ręki na gryfie","desc":"Lekcja 6. Ćwiczenia w skalach z przemieszczaniem pozycji ręki na gryfie"}]},
      {"title":"Moduł 2 - Zagrywki w skalach","desc":"Moduł 2 - Zagrywki w skalach",
      "lessons":[
        {"title":"Lekcja 10. Zagrywki w skali miksolidyjskiej i doryckiej - c.d.","desc":"Lekcja 10. Zagrywki w skali miksolidyjskiej i doryckiej - c.d."},
        {"title":"Lekcja 11. Niecobardziej zaawansowane zagrywki","desc":"Lekcja 11. Niecobardziej zaawansowane zagrywki"},
        {"title":"Lekcja 7. Zagrywki w skalach pentatonicznych","desc":"Lekcja 7. Zagrywki w skalach pentatonicznych"},
        {"title":"Lekcja 8. Zagrywki w skalach pentatonicznych - c.d.","desc":"Lekcja 8. Zagrywki w skalach pentatonicznych - c.d."},
        {"title":"Lekcja 9. Zagrywki w skali miksolidyjskiej i doryckiej","desc":"Lekcja 9. Zagrywki w skali miksolidyjskiej i doryckiej"}]},
      {"title":"Moduł 3 - Bluesowe riﬀy","desc":"Moduł 3 - Bluesowe riﬀy","lessons":[
        {"title":"Lekcja 12. Proste riﬀy grane na power chordach","desc":"Lekcja 12. Proste riﬀy grane na power chordach"},
        {"title":"Lekcja 13. Podkład grany na pełnych akordach","desc":"Lekcja 13. Podkład grany na pełnych akordach"},
        {"title":"Lekcja 14. Przykład prostego riﬀu granego palcami - fingerstyle","desc":"Lekcja 14. Przykład prostego riﬀu granego palcami - fingerstyle"}]},
      {"title":"Moduł 4 - Gramy kompletne utwory w stylistyce bluesowej","desc":"Moduł 4 - Gramy kompletne utwory w stylistyce bluesowej",
      "lessons":[
        {"title":"Lekcja 15 - prezentacja Blues'a Mollowego","desc":"Lekcja 15 - prezentacja Blues'a Mollowego"},
        {"title":"Lekcja 16 - omówienie zagrywek występujących w Bluesie Mollowym","desc":"Lekcja 16 - omówienie zagrywek występujących w Bluesie Mollowym"},
        {"title":"Lekcja 17 - bardziej zaawansowane zagadnienia związane z formą Bluesa Mollowego","desc":"Lekcja 17 - bardziej zaawansowane zagadnienia związane z formą Bluesa Mollowego"},
        {"title":"Lekcja 18 - Boogie-woogie - prezentacja","desc":"Lekcja 18 - Boogie-woogie - prezentacja"},
        {"title":"Lekcja 19 - omówienie zagrywek składających się na Boogie-woogie","desc":"Lekcja 19 - omówienie zagrywek składających się na Boogie-woogie"},
        {"title":"Lekcja 20 - bardziej zaawansowane zagadnienia związane z graniem Boogie-woogie","desc":"Lekcja 20 - bardziej zaawansowane zagadnienia związane z graniem Boogie-woogie"},
        {"title":"Lekcja 21 - Modern Blues - prezentacja","desc":"Lekcja 21 - Modern Blues - prezentacja"},
        {"title":"Lekcja 22 - prezentacja i omówienie zagrywek w Modern Blues","desc":"Lekcja 22 - prezentacja i omówienie zagrywek w Modern Blues"},
        {"title":"Lekcja 23 - bardziej zaawansowane zagadnienia związane z Modern Blues","desc":"Lekcja 23 - bardziej zaawansowane zagadnienia związane z Modern Blues"}]},
      {"title":"Moduł 5 - Wstęp do improwizacji","desc":"Moduł 5 - Wstęp do improwizacji",
      "lessons":[
        {"title":"Lekcja 24. Jak myśleć o improwizacji","desc":"Lekcja 24. Jak myśleć o improwizacji"},
        {"title":"Lekcja 25. Jak rozwijać pomysły i wyobraźnię","desc":"Lekcja 25. Jak rozwijać pomysły i wyobraźnię"},
        {"title":"Lekcja 26. Jak odnaleźć się we właściwej tonacji i nie bać się improwizować","desc":"Lekcja 26. Jak odnaleźć się we właściwej tonacji i nie bać się improwizować"}]},
      {"title":"Moduł 6 - Bonus","desc":"Moduł 6 - Bonus",
      "lessons":[
        {"title":"Lekcja 27. Bonus - Mini kurs obsługi programu Guitar Pro","desc":"Lekcja 27. Bonus - Mini kurs obsługi programu Guitar Pro"}
      ]}]}

  ]


  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get('https://test.szkola-gitary.pl/api/course/');
    // return this.courses;
  }

  getCourseDetails() {
    return this.details;
  }
}
