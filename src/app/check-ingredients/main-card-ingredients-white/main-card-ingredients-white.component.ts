import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-main-card-ingredients-white',
  templateUrl: './main-card-ingredients-white.component.html',
  styleUrls: ['./main-card-ingredients-white.component.css']
})
export class MainCardIngredientsWhiteComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
