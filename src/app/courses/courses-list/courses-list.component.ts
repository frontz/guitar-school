import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  coursesList: any = [];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesList = this.coursesService.getCourses().subscribe(data => {
      this.coursesList = data;
      console.log(this.coursesList);
    });

  }

}

