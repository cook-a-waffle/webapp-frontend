import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-card-mix',
  templateUrl: './main-card-mix.component.html',
  styleUrls: ['./main-card-mix.component.css']
})
export class MainCardMixComponent implements OnInit {
  op: number;
  constructor() {
    this.op = 1;
  }

  ngOnInit(): void {
  }

}
