import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent {

  validator =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  oldPass = '';
  newPass = '';
  confirmPass = '';
  confirmError = false;
  successMessage = '';
  errorMessage = '';
  errorPasswordFormat = '';

  constructor(private authService: AuthService) {}

  changePass() {
    if (this.newPass !== this.confirmPass) {
      this.confirmError = true;
      this.successMessage = '';
      this.errorMessage = '';
    } else {
      if (this.newPass.match(this.validator)) {
        this.confirmError = false;
        this.authService.changePassword(this.oldPass, this.newPass).subscribe(
          res => {
            console.log(res);
            this.successMessage = 'Hasło zostało pomyślnie zmienione';
            this.errorPasswordFormat = '';
            this.errorMessage = '';
            this.oldPass = '';
            this.newPass = '';
            this.confirmPass = '';
          }, error => {
            console.log(error);
            this.errorMessage = 'Wydarzył się błąd';
            this.successMessage = '';
          })
        } else {
          this.errorPasswordFormat = 'Nieprawidłowy format hasła';
        }
    }
  }

}
