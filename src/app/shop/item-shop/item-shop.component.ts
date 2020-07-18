import { Component, OnInit, Input } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-item-shop',
  templateUrl: './item-shop.component.html',
  styleUrls: ['./item-shop.component.css']
})
export class ItemShopComponent implements OnInit {
  @Input() item: any;
  faEllipsisV = faEllipsisV;
  constructor() {
  }
  ngOnInit(): void {
  }
}
