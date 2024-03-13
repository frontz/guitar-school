import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  username: string = '';
  password: string = '';
  confirm: string = '';
  email: string = '';
  registerService: AuthService | undefined;

  constructor() {

  }

  register() {
    this.registerService?.register(this.username, this.password, this.email);
    this.username = '';
    this.password = '';
    this.confirm = '';
    this.email = '';
  }


}
