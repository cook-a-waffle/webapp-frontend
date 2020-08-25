import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {
  @Input() items: Array<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
