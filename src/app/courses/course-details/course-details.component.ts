import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  courseDetails: any;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.courseDetails = this.coursesService.getCourseDetails()[0];
    console.log(this.courseDetails);
  }

}
