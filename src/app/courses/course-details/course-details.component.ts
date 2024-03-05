import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  courseDetails: any;
  courseId: any;

  constructor(private coursesService: CoursesService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
     if (this.courseId) {
      this.getDetail();
    }
  }

  getDetail() {
    this.coursesService.getCourseDetails(this.courseId)
    .subscribe(data => {
      this.courseDetails = data;
    });
  }

}
