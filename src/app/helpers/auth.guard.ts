import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard  {


    user: string | null | undefined;
    
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

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
        this.user = item.value;
        return item.value;
      }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.getWithExpiry('user');
        if (user) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
