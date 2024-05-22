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
  validator = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  emailFormatError = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.emailFormatError = '';
    if (this.email.trim().match(this.validator)) {
      this.authService.login(this.email, this.password).subscribe(result => {
        console.log(result);
        this.router.navigate(['/my-courses']);
      },
        error => {
          console.error(error);
          this.loginError = true;
        });
    } else {
      this.emailFormatError = 'Nieprawidłowy format e-maila';
    }
  }
}
