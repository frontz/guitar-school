import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './auth/login/login-form.component';
import {RegisterFormComponent} from "./auth/register/register-form.component";
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';

const routes: Routes = [
  { path: 'login', component:  LoginFormComponent },
  { path: 'register', component:  RegisterFormComponent },
  { path: 'courses', component: CoursesListComponent },
  { path: 'course-details', component: CourseDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
