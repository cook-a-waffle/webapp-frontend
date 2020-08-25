import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-item-shop',
  templateUrl: './item-shop.component.html',
  styleUrls: ['./item-shop.component.css']
})
export class ItemShopComponent implements OnInit {
  @Input() item: any;
  faEllipsisV = faEllipsisV;
  @ViewChild("card") card: ElementRef;
  @ViewChild("circles") circles: ElementRef;
  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  changeStyle() {
    let cardItem = this.card.nativeElement;
    let circlesItem = this.circles.nativeElement;
    this.renderer.removeClass(circlesItem, "dark-svg");
    this.renderer.addClass(circlesItem, "white-svg");
    this.renderer.addClass(cardItem, "card-item-content-hover");
  }
}
