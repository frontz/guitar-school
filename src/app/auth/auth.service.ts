import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(user: string, pass: string): void {
    console.log(user, pass);
  }

  register(user: string, pass: string, email: string): void {
    console.log(user, pass, email);
  }
}
