import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/services/subscribe.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private subscribeService: SubscribeService) {}

  success = false;

  display = "none";

  name: string = '';
  email: string = '';

  openModal() {
    this.display = "block";
  }

  onCloseHandled() {
    this.display = "none";
  }

  joinTheNews(nick: string, email: string) {
    this.subscribeService.subscribe(nick, email).subscribe(data => {
      console.log(data);
      this.success = true;
    }, error => {
      console.error(error);
    });
  }

}

