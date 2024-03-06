import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient)  { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  public login(user: string, pass: string) {
    return this.http.post('https://test.szkola-gitary.pl/api/login/', {"username": user, "password": pass}, this.httpOptions );
  }

  register(user: string, pass: string, email: string): void {
    console.log(user, pass, email);
  }
}
