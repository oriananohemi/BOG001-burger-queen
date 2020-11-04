import { Component, HostListener } from '@angular/core';
import { areas } from './home.constant';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  areas = areas;
  logo = 'assets/images/brand.png';

  installEvent = null;

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: Event) {
    console.log(event);
    event.preventDefault();
    this.installEvent = event;
  }

  installByUser() {
    if (this.installEvent) {
      this.installEvent.prompt();
      this.installEvent.userChoice()
      .then(res => {
        console.log(res)
      });
    }
  }
}
