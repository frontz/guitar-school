import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from "./login/login-form.component";
import { FormsModule } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { ChangePassComponent } from './change-pass/change-pass.component';
import { RemindPasswordComponent } from './remind-password/remind-password.component';
import { RouterModule } from '@angular/router';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    ChangePassComponent,
    RemindPasswordComponent,
    ConfirmPasswordComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    LoginFormComponent,
  ],
  providers: [
    AuthService,
  ]
})
export class AuthModule { }
