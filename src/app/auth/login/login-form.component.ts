import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  username: string = '';
  password: string = '';
  loginError = false;

  constructor(private authService: AuthService, private router: Router) {}


  login(user: string, pass: string) {
    this.authService.login(user, pass).subscribe(result => {
      console.log(result);
      this.router.navigate(['/my-courses']);
    },
      error => {
        console.error(error);
        this.loginError = true;
      });
  }



}
