import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'burgerQueen';

  constructor(
    private swUpdate: SwUpdate,
    private messaging: AngularFireMessaging
  ){}

  ngOnInit() {
    this.updatePWA();
    // this.requestPermission();
    // this.listenNotifications();
  }

  updatePWA() {
    this.swUpdate.available.subscribe(value => {
      window.location.reload();
    });
  }

  // requestPermission(){
  //   this.messaging.requestToken
  //   .subscribe(token => {
  //     console.log(token);
  //   });
  // }

  // listenNotifications() {
  //   this.messaging.messages
  //   .subscribe(message => {
  //     console.log(message);
  //   });
  // }
}
