import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-card-academy',
  templateUrl: './item-card-academy.component.html',
  styleUrls: ['./item-card-academy.component.css']
})
export class ItemCardAcademyComponent implements OnInit {
  @Input() items: any;
  constructor() {
  }

  ngOnInit(): void {
  }

}
