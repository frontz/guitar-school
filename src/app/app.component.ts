import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { AuthService } from './services/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user = '';
  title = 'guitar-school';

  constructor(private authService: AuthService) {}

  ngOnInit () {
   this.authService.getInfo().subscribe(user => {
    this.user = user.first_name;
    console.log(this.user);
   })
  }

}
