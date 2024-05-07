import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.css']
})
export class ConfirmPasswordComponent implements OnInit {

  validator =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  url = '';
  pattern = 'confirm-password/';
  uuid = '';
  token = '';
  email: any;
  newPassword = '';
  confirmNewPassword = '';
  comparePass = '';
  validationPassFormat = '';

  successMessage = '';
  errorMessage = '';

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.url = window.location.href;
    let rest = this.findAndCut(this.url, this.pattern);
    console.log(rest);
    if (this.divideString(this.url).length === 2) {
      this.uuid = this.divideString(rest)[0];
      this.token = this.divideString(rest)[1];
      console.log(this.uuid);
      console.log(this.token);
    }
  }

  findAndCut(str: string, pat: string): string {
    let indeks = str.indexOf(pat);

    if (indeks === -1) {
        return '';
    }
    
    let rest = str.substring(indeks + pat.length);
    return rest;
  }

  divideString(str: string): any {
    if (str.includes('/')) {
        const indexSlash = str.indexOf('/');
        const beforeSlash = str.substring(0, indexSlash); 
        const afterSlash = str.substring(indexSlash + 1);
        
        return [beforeSlash, afterSlash];
    } else {
        return "Not found '/'";
    }
  }

  validationPassword(pass: string, confirm: string) {
    if (pass !== confirm) {
      this.comparePass = 'Passwords are not the same';
      return false;
    } else {
      this.comparePass = '';
      return true;
    }
  }

  confirmPassword() {
    if (this.validationPassword(this.newPassword, this.confirmNewPassword)) {
      if (this.newPassword.match(this.validator)) {
        this.validationPassFormat = '';
        console.log(this.newPassword, this.uuid, this.token);
        this.auth.confirmPassword(this.newPassword, this.uuid, this.token).subscribe(
          res => {
            this.successMessage = 'Password has been changed succesfully';
            this.newPassword = '';
            this.confirmNewPassword = '';
          }, error => {
            this.errorMessage = 'Error occured';
            console.error(error);
          }
        );
      } else {
        this.comparePass = '';
        this.validationPassFormat = 'Wrong password format';
      }
    }
  }

}
