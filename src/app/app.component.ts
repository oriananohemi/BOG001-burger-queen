import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'burgerQueen';

  constructor(
    private swUpdate: SwUpdate
  ){}

  ngOnInit() {
    this.updatePWA();
  }

  updatePWA() {
    this.swUpdate.available.subscribe(value => {
      window.location.reload();
    });
  }
}
