import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  user: string | null = '';

  constructor(private authService: AuthService) {}

  getCurrentUser() {
    this.user = localStorage.getItem('user');
    return this.user;
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }

}
