import { AfterContentChecked, AfterViewChecked, Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { UserCoursesService } from 'src/app/services/user-courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit, AfterViewChecked {

  coursesList: any = [];
  userCoursesList: any = [];
  idsCoursesList: number[] = [];
  idsUserCoursesList: number[] = [];

  constructor(private coursesService: CoursesService, private userCoursesService: UserCoursesService) {}
  

  async ngOnInit(): Promise<void> {
    this.getCoursesList().then(await this.getUserCoursesList());
  }

  ngAfterViewChecked(): void {
    this.idsCoursesList = this.coursesList.map((object: { id: any; }) => object.id);
    this.idsUserCoursesList = this.userCoursesList.map((object: { id: any; }) => object.id);
    console.log('Kursy ids:');
    console.log(this.idsCoursesList);
    console.log('Kursy użytkownika ids:');
    console.log(this.idsUserCoursesList);
  }

  getCoursesList(): Promise<any> {
    this.coursesService.getCourses().subscribe(data => {
      this.coursesList = data;
      console.log(this.coursesList);
      console.log('---------------------');
    });
    return new Promise(this.coursesList);
  }

  getUserCoursesList(): Promise<any> {
    this.userCoursesService.getMyCourses().subscribe(data => {
      this.userCoursesList = data;
      console.log(this.userCoursesList);
    });
    return new Promise(this.userCoursesList);
  }


}

