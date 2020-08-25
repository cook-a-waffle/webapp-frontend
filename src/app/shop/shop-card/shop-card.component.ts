import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.css']
})
export class ShopCardComponent implements OnInit {
  @Output() response = new EventEmitter<boolean>();
  @Input() card: any;
  constructor() { }

  ngOnInit(): void {
  }

  open(open: boolean) {
    this.response.emit(open);
    console.log('open clicked');
  }
}
