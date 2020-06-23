import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-main-card-cook-it-dark',
  templateUrl: './main-card-cook-it-dark.component.html',
  styleUrls: ['./main-card-cook-it-dark.component.css']
})
export class MainCardCookItDarkComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
