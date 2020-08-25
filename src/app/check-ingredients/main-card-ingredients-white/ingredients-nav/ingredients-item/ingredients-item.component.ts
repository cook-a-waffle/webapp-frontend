import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ingredients-item',
  templateUrl: './ingredients-item.component.html',
  styleUrls: ['./ingredients-item.component.css']
})
export class IngredientsItemComponent implements OnInit {
  @Input() item: number;
  constructor() { }

  ngOnInit(): void {
  }

}
