import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginFormComponent} from "./login/login-form.component";
import {RegisterFormComponent} from "./register/register-form.component";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../services/auth.service";

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginFormComponent,
    RegisterFormComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
