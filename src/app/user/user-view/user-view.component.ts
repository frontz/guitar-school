import { Component, OnInit } from '@angular/core';
import { UserCoursesService } from '../user-courses.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  constructor(private userCoursesService: UserCoursesService) {}

  ngOnInit() {
    this.userCoursesService.getMyCourses().subscribe(data => {
      console.log(data);
    });
  }

}
