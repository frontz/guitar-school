import { Component, OnInit } from '@angular/core';
import { UserCoursesService } from '../../services/user-courses.service';

@Component({
  selector: 'app-user-courses-list',
  templateUrl: './user-courses-list.component.html',
  styleUrls: ['./user-courses-list.component.css']
})
export class UserCoursesListComponent implements OnInit {

  myCourses: any;

  constructor(private userCoursesService: UserCoursesService) {}

  ngOnInit() {
    this.userCoursesService.getMyCourses().subscribe(data => {
      this.myCourses = data;
      console.log(this.myCourses);
    });
  }

}
