import { Component, OnInit } from '@angular/core';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faHotdog } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  faPizzaSlice = faPizzaSlice;
  faSeedling = faSeedling;
  faHotdog = faHotdog;
  items: any[];
  constructor() {
    this.items = [{
      title: 'pizza',
      ico: faPizzaSlice,
      amount: '08'
    },
    {
      title: 'salad',
      ico: faSeedling,
      amount: '14'
    },
    {
      title: 'hotdog',
      ico: faHotdog,
      amount: '11'
    }];
  }

  ngOnInit(): void {
  }

}
