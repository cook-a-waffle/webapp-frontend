import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-ingredients',
  templateUrl: './check-ingredients.component.html',
  styleUrls: ['./check-ingredients.component.css']
})
export class CheckIngredientsComponent implements OnInit {
  items: Array<number> = new Array();
  constructor() {
    this.items = this.buildItems(15);
  }

  buildItems(times: number) {
    let itemsCards: Array<number> = new Array();
    for (let index = 1; index <= times; index++) {
      itemsCards.push(index);
    }
    return itemsCards;
  }

  ngOnInit(): void {
  }

}
