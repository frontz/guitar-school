import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  constructor(private authService: AuthService) {}

  getCurrentUser() {
    let user = localStorage.getItem('user');
    return user;
  }


  logout() {
    this.authService.logout();
    window.location.reload();
  }

}
