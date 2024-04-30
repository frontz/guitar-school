import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent {

  oldPass = '';
  newPass = '';
  confirmPass = '';
  confirmError = false;
  successMessage = '';
  errorMessage = '';

  constructor(private authService: AuthService) {}

  changePass() {
    if (this.newPass !== this.confirmPass) {
      this.confirmError = true;
      this.successMessage = '';
      this.errorMessage = '';
    } else {
      this.confirmError = false;
      this.authService.changePassword(this.oldPass, this.newPass).subscribe(
        res => {
          console.log(res);
          this.successMessage = 'Password changed successfully';
          this.errorMessage = '';
          this.oldPass = '';
          this.newPass = '';
          this.confirmPass = '';
        }, error => {
          console.log(error);
          this.errorMessage = 'Error occured';
          this.successMessage = '';
        }
      )
    }
  }

}
