import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  logo = 'assets/images/brand.png';

  constructor() { }

  ngOnInit(): void {
  }

}
