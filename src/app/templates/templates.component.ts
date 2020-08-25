import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  items: Array<any>;
  categories: Array<string>;
  constructor() {
    this.items = this.buildCards(15);
    this.categories = this.buildCategories(15);
  }

  buildCards(times: number) {
    let cardsContent: Array<any> = new Array();
    for (let index = 1; index <= times; index++) {
      cardsContent.push({
        title: `Template ${index}`,
        content: 'This is an axample text to get up the card test'
      });
    }
    return cardsContent;
  };

  buildCategories(times: number) {
    let category: Array<string> = new Array();
    for (let index = 1; index <= times; index++) {
      category.push(`Category ${index}`);
    }
    return category;
  };

  ngOnInit(): void {
  }

}
