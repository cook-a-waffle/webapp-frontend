import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-mix-tres',
  templateUrl: './add-to-mix-tres.component.html',
  styleUrls: ['./add-to-mix-tres.component.css']
})
export class AddToMixTresComponent implements OnInit {
  photoItems: Array<string> = new Array();
  constructor() {
    this.photoItems = ['/assets/lotus.jpg', '/assets/firework.jpg', '/assets/rain.jpg', '/assets/woman.jpg', '/assets/apple.jpg', '/assets/frog.jpg', '/assets/blueBird.jpg', '/assets/duckling.jpg', '/assets/sunSet.jpg', '/assets/heritage.jpg'];
  }

  ngOnInit(): void {
  }

}
