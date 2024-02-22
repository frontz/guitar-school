import { Component } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  username: string = '';
  password: string = '';
  loginService: AuthService;

  constructor() {
    this.loginService = new AuthService();
  }


  login() {
   this.loginService?.login(this.username, this.password);
    this.username = '';
    this.password = '';
  }

}
