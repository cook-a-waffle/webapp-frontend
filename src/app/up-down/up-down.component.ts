import { Component, OnInit, Renderer2, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-up-down',
  templateUrl: './up-down.component.html',
  styleUrls: ['./up-down.component.css']
})
export class UpDownComponent implements OnInit {
  faCaretUp = faCaretUp;
  faCaretDown = faCaretDown;
  @ViewChild("up") up: ElementRef;
  @ViewChild("down") down: ElementRef;
  @Output() response = new EventEmitter<boolean>();
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.hideItem(this.up.nativeElement);
    console.log(this.up.nativeElement);
  }

  hideItem(element: any) {
    this.renderer.setStyle(element, "display", `none`);
  }

  close(flag: boolean) {
    this.response.emit(flag);
    console.log(flag);
  }
}
