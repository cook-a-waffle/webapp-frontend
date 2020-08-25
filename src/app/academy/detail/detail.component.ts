import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  items: Array<any>;
  constructor() {
    this.items = this.build(15);
  }

  ngOnInit(): void {
  }

  build(times: number) {
    let cardsContent: Array<any> = new Array();
    for (let index = 1; index <= times; index++) {
      cardsContent.push({
        title: `Video ${index}`,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`
      });
    }
    return cardsContent;
  };
}
