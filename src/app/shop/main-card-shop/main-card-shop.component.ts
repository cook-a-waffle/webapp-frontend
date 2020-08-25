import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { farFaStar } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-main-card-shop',
  templateUrl: './main-card-shop.component.html',
  styleUrls: ['./main-card-shop.component.css']
})
export class MainCardShopComponent implements OnInit {
  @Input() newClass: string;
  faShoppingCart = faShoppingCart;
  faStar = faStar;
  @ViewChild("blackCard") blackCard: ElementRef;
  @Output() response = new EventEmitter<boolean>();

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  openClose(flag: boolean) {
    if (flag) {
      this.response.emit(flag);
      this.renderer.removeClass(this.blackCard.nativeElement, "growUpBlackCard");
    }
  }
}
