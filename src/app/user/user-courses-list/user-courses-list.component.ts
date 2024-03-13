import { Component, OnInit } from '@angular/core';
import { UserCoursesService } from '../user-courses.service';

@Component({
  selector: 'app-user-courses-list',
  templateUrl: './user-courses-list.component.html',
  styleUrls: ['./user-courses-list.component.css']
})
export class UserCoursesListComponent implements OnInit {

  constructor(private userCoursesService: UserCoursesService) {}

  ngOnInit() {
    this.userCoursesService.getMyCourses().subscribe(data => {
      console.log(data);
    });
  }

}
