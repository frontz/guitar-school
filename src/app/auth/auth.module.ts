import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from "./login/login-form.component";
import { FormsModule } from "@angular/forms";
import { AuthService } from "../services/auth.service";

@NgModule({
  declarations: [
    LoginFormComponent,
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
