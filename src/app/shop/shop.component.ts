import { Component, OnInit } from '@angular/core';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faHotdog } from '@fortawesome/free-solid-svg-icons';
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  faPizzaSlice = faPizzaSlice;
  faSeedling = faSeedling;
  faHotdog = faHotdog;
  faDrumstickBite = faDrumstickBite;
  items: any[];
  cards: any[];
  newClass: string;
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
    },
    {
      title: 'chiken',
      ico: faDrumstickBite,
      amount: '20'
    }];

    this.cards = [{
      title: 'pizza',
      content: 'Payment send',
      price: 100
    },
    {
      title: 'salad',
      content: 'Payment send',
      price: 150
    },
    {
      title: 'hotdog',
      content: 'Payment send',
      price: 200
    },
    {
      title: 'hotdog',
      content: 'Payment received',
      price: 200
    },
    {
      title: 'hotdog',
      content: 'Payment received',
      price: 200
    },
    {
      title: 'chiken',
      content: 'Payment send',
      price: 500
    },
    {
      title: 'enchiladas',
      content: 'Pay',
      price: 500
    }];
  }

  openClose(open) {
    if (open) {
      console.log('blackCard');
      this.newClass = 'growUpBlackCard';
    } else {
      this.newClass = 'hhhh';
      console.log('We got a problem, try some minutes later.');
    }
  }

  ngOnInit(): void {
  }

}
