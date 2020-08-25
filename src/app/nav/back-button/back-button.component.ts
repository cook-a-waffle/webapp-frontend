import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnInit {

  constructor(private location: Location) {
  }
  goBack() {
    this.location.back();
    console.log('hi');
  }
  faArrowLeft = faArrowLeft;
  ngOnInit(): void {
  }

}
