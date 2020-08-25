import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-progress-play',
  templateUrl: './progress-play.component.html',
  styleUrls: ['./progress-play.component.css']
})

export class ProgressPlayComponent implements OnInit {
  faPlay = faPlay;
  @ViewChild("circle") circle: ElementRef;
  @ViewChild("overTape") overTape: ElementRef;

  constructor(private renderer: Renderer2) { }

  circleProgress(percent: number) {
    let circleItem: any = this.circle.nativeElement;
    let radius: number = circleItem.r.baseVal.value;
    let circumference: number = radius * 2 * Math.PI;
    let offset: number;
    this.renderer.setStyle(circleItem, 'strokeDasharray', `${circumference} ${circumference}`);
    this.renderer.addClass(circleItem, "my-class");
    offset = circumference - percent / 100 * circumference;
    this.renderer.setStyle(circleItem, 'strokeDashoffset', offset);
    console.log([percent, offset]);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.setUp();
  }

  setUp() {
    let circleItem: any = this.circle.nativeElement;
    let radius: number = circleItem.r.baseVal.value;
    let circumference: number = radius * 2 * Math.PI;
    this.renderer.setStyle(circleItem, 'strokeDashoffset', circumference);
  }

}
