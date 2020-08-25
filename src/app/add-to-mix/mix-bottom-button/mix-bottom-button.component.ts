import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mix-bottom-button',
  templateUrl: './mix-bottom-button.component.html',
  styleUrls: ['./mix-bottom-button.component.css']
})
export class MixBottomButtonComponent implements OnInit {
  faPlay = faPlay;
  @ViewChild("circle") circle: ElementRef;
  constructor(private renderer: Renderer2) { }
  addMyClass() {
    this.renderer.addClass(this.circle.nativeElement, "my-class");
    console.log(this.circle.nativeElement);
  }

  removeMyClass() {
    this.renderer.removeClass(this.circle.nativeElement, "my-class");
  }
  circleProgress(percent: number) {
    let circleItem: any = this.circle.nativeElement;
    let radius: any = circleItem.r.baseVal.value;
    let circumference: any = radius * 2 * Math.PI;
    let offset = circumference - 100 / 100 * circumference;
    this.renderer.setStyle(this.circle.nativeElement, 'strokeDashoffset', offset);
    this.renderer.setStyle(circleItem, 'strokeDasharray', `${circumference} ${circumference}`);
    this.renderer.setStyle(circleItem, 'strokeDashoffset', circumference);
    this.renderer.addClass(this.circle.nativeElement, "my-class");
    offset = circumference - percent / 100 * circumference;
    this.renderer.setStyle(this.circle.nativeElement, 'strokeDashoffset', offset);
    console.log([percent, offset]);
  }
  ngOnInit(): void { }
}
