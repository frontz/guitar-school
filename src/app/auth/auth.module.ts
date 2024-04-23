import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from "./login/login-form.component";
import { FormsModule } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { ChangePassComponent } from './change-pass/change-pass.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    ChangePassComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginFormComponent,
  ],
  providers: [
    AuthService,
  ]
})
export class AuthModule { }
