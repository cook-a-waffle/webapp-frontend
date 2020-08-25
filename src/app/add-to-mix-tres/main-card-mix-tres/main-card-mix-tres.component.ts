import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-main-card-mix-tres',
  templateUrl: './main-card-mix-tres.component.html',
  styleUrls: ['./main-card-mix-tres.component.css']
})
export class MainCardMixTresComponent implements OnInit {
  @Input() photoItems: Array<string>;
  @ViewChild("view") view: ElementRef;
  faMinus = faMinus;
  faPlus = faPlus;
  faLongArrowAltRight = faLongArrowAltRight;
  op: number;
  constructor(private renderer: Renderer2) {
    this.op = 3;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    let viewItem = this.view.nativeElement;
    this.renderer.setStyle(viewItem, "background-image", `url("${this.photoItems[0]}")`);
    console.log(this.photoItems[0]);
  }

  setViewImg(img) {
    let viewItem = this.view.nativeElement;
    this.renderer.setStyle(viewItem, "background-image", `url("${img}")`);
    console.log(img);
  }
}