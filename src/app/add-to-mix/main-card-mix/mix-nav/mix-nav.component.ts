import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-mix-nav',
  templateUrl: './mix-nav.component.html',
  styleUrls: ['./mix-nav.component.css']
})
export class MixNavComponent implements OnInit {
  @Input() op: number;
  @ViewChild("pa1") pa1: ElementRef;
  @ViewChild("pa2") pa2: ElementRef;
  @ViewChild("pa3") pa3: ElementRef;
  elementsArray: Array<any>;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.elementsArray = [this.pa1.nativeElement, this.pa2.nativeElement, this.pa3.nativeElement];
    this.fillCircle(this.op, this.elementsArray);
  }

  fillCircle(op: number, elements: any) {
    for (let index = 0; index < op; index++) {
      this.renderer.addClass(elements[index], 'circle-mix-nav-fill');
    }
  }
}
