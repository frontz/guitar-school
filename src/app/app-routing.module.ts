import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './auth/login/login-form.component';
import { RegisterFormComponent } from "./auth/register/register-form.component";
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { UserCoursesListComponent } from './user/user-courses-list/user-courses-list.component';
import { AuthGuard } from './helpers/auth.guard';
import { UserCourseDetailsComponent } from './user/user-course-details/user-course-details.component';
import { ContactComponent } from './contact/contact/contact.component';

const routes: Routes = [
  { path: '', component:  CoursesListComponent },
  { path: 'login', component:  LoginFormComponent },
  { path: 'register', component:  RegisterFormComponent },
  { path: 'courses', component: CoursesListComponent },
  { path: 'course/:id', component: CourseDetailsComponent },
  { path: 'my-courses', component: UserCoursesListComponent, canActivate: [AuthGuard] },
  { path: 'my-course/:id', component: UserCourseDetailsComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
