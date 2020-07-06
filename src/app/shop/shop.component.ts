import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  items: any[];
  constructor() {
    this.items = [{
      title: 'pizza',
      ico: 'faPizzaSlice',
      amount: '08'
    },
    {
      title: 'salad',
      ico: 'faPizzaSlice',
      amount: '14'
    },
    {
      title: 'salad',
      ico: 'faPizzaSlice',
      amount: '11'
    }];
  }

  ngOnInit(): void {
  }

}
