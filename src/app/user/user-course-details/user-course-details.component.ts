import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserCoursesService } from 'src/app/services/user-courses.service';

@Component({
  selector: 'app-user-course-details',
  templateUrl: './user-course-details.component.html',
  styleUrls: ['./user-course-details.component.css']
})
export class UserCourseDetailsComponent implements OnInit {

  courseDetails: any;
  courseId: any;
  currentPage = 1;
  disabled = true;

  constructor(private userCoursesService: UserCoursesService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
     if (this.courseId) {
      this.getDetails();
    }
  }

  getDetails  () {
    this.userCoursesService.getMyCourseDetails(this.courseId)
    .subscribe(data => {
      this.courseDetails = data;
      console.log(this.courseDetails);
    });
  }

  setModulePage(pageNr: number) {
    this.currentPage = pageNr;
    console.log(this.currentPage);
  }

  incrementModulePage() {
    if (this.currentPage < this.courseDetails.modules.length) {
      this.currentPage = this.currentPage + 1;
    };
  }

  decrementModulePage() {
    if (this.currentPage > 0) {
      this.currentPage = this.currentPage - 1;
    };
  }

}
