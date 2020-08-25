import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: Array<any>;

  constructor() {
    this.items = this.buildCards(15);
  }

  ngOnInit(): void {
  }

  buildCards(times: number) {
    let cardsContent: Array<any> = new Array();
    for (let index = 1; index <= times; index++) {
      cardsContent.push({
        title: `Skill ${index}`,
        content: 'This is an axample text to get up the card test'
      });
    }
    return cardsContent;
  };

}
