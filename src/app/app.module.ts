import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import {AuthModule} from "./auth/auth.module";
import { AboutComponent } from './about/about.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { UserCoursesListComponent } from './user/user-courses-list/user-courses-list.component';
import { BasketComponent } from './shop/basket/basket.component';
import { CoursesModule } from './courses/courses.module';
import { FormsModule } from '@angular/forms';
import { UserCourseDetailsComponent } from './user/user-course-details/user-course-details.component';
import { ContactComponent } from './contact/contact/contact.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { YoutubeUrlPipe } from './helpers/sanitize.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    CoursesListComponent,
    CourseDetailsComponent,
    UserCoursesListComponent,
    BasketComponent,
    UserCourseDetailsComponent,
    ContactComponent,
    YoutubeUrlPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    CoursesModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}, YoutubeUrlPipe
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
