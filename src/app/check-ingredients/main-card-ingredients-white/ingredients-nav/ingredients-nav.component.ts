import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ingredients-nav',
  templateUrl: './ingredients-nav.component.html',
  styleUrls: ['./ingredients-nav.component.css']
})
export class IngredientsNavComponent implements OnInit {
  @Input() items: Array<number>;
  constructor() { }

  ngOnInit(): void {
  }

}
