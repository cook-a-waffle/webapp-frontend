import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.css']
})
export class PhotoItemComponent implements OnInit {
  @Input() photoItem: string;
  @ViewChild("photo") photo: ElementRef;
  @Output() response = new EventEmitter<string>();
  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.setUpPhoto(this.photo.nativeElement);
  }

  sendImg(img: string) {
    this.response.emit(img);
    console.log(img);
  }

  setUpPhoto(element: any) {
    this.renderer.setStyle(element, "background-image", `url("${this.photoItem}")`);
    console.log(this.photoItem);
  }
}
