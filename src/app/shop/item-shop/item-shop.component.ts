import { Component, OnInit, Input } from '@angular/core';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-item-shop',
  templateUrl: './item-shop.component.html',
  styleUrls: ['./item-shop.component.css']
})
export class ItemShopComponent implements OnInit {
  @Input() item: any;
  faPizzaSlice = faPizzaSlice;
  faEllipsisV = faEllipsisV;
  faSeedling = faSeedling;
  constructor() {
  }
  ngOnInit(): void {
  }
}
