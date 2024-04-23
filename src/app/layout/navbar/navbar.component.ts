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

  public getWithExpiry(key: string) {
    const itemStr = localStorage.getItem(key)
    // if the item doesn't exist, return null
    if (!itemStr) {
      this.user = null;
      return null;
    }
    const item = JSON.parse(itemStr)
    const now = new Date()
    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
      // If the item is expired, delete the item from storage
      // and return null
      localStorage.removeItem(key);
      this.user = null;
      return null;
    }
    this.user = item.value
    return item.value;
  }

  changePassword() {

  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }

}
