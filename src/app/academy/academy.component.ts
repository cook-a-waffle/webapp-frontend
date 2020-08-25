import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.css']
})
export class AcademyComponent implements OnInit {
  popular: Array<any>;
  forYou: Array<any>;
  constructor() {
    this.popular = ['Most popular', this.build(15)];
    this.forYou = ['Courses for you', this.build(15)];
  }

  ngOnInit(): void {
  }

  build(times: number) {
    let cardsContent: Array<any> = new Array();
    for (let index = 1; index <= times; index++) {
      cardsContent.push({
        title: `Card ${index}`,
        content: `${times} Lessons`
      });
    }
    return cardsContent;
  };

}
