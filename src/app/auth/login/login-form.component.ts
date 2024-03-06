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


  constructor(private authService: AuthService) {

  }


  login(user: string, pass: string) {
    this.authService.login(user, pass).subscribe(data => {
      console.log(data);
    })
  }

}
