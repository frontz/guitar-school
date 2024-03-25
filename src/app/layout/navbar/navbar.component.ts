import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  @Input()
  user = '';

  constructor(private authService: AuthService) {}


  logout() {
    this.authService.logout();
    window.location.reload();
  }

}
