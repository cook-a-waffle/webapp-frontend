import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-main-card-ingredients-white',
  templateUrl: './main-card-ingredients-white.component.html',
  styleUrls: ['./main-card-ingredients-white.component.css']
})
export class MainCardIngredientsWhiteComponent implements OnInit {
  @Input() items: Array<number>;
  constructor() { }

  ngOnInit(): void {
  }

}
