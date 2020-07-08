import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { farFaStar } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-main-card-shop',
  templateUrl: './main-card-shop.component.html',
  styleUrls: ['./main-card-shop.component.css']
})
export class MainCardShopComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  faStar = faStar;
  constructor() { }

  ngOnInit(): void {
  }

}
