import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  email: string = '';
  password: string = '';
  loginError = false;
  validator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  emailFormatError = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(email: string, pass: string) {
    if (email.match(this.validator)) {
      this.authService.login(email, pass).subscribe(result => {
        console.log(result);
        this.router.navigate(['/my-courses']);
      },
        error => {
          console.error(error);
          this.loginError = true;
        });
    } else {
      this.emailFormatError = 'Wrong email format';
    }
  }
}
