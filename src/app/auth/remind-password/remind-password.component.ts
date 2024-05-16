import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-remind-password',
  templateUrl: './remind-password.component.html',
  styleUrls: ['./remind-password.component.css']
})
export class RemindPasswordComponent {

  constructor(private auth: AuthService) {}

  email: any;
  validator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  errorEmailFormatMessage = '';
  successMessage = '';
  errorMessage = '';

  remindPassword(email: string) {
    if (email.match(this.validator)) {
      this.auth.sendPasswordResetLink(email).subscribe(res => {
        console.log(res);
        this.email = '';
        this.errorEmailFormatMessage = '';
        this.successMessage = 'Link do zresetowania hasła został wysłany';
      }, error => {
        console.log(error);
      });
    } else {
      this.successMessage = '';
      this.errorEmailFormatMessage = 'Nieprawidłowy format e-maila';
    }
  }

}
