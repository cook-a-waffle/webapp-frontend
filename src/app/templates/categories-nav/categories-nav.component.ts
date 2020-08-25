import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categories-nav',
  templateUrl: './categories-nav.component.html',
  styleUrls: ['./categories-nav.component.css']
})
export class CategoriesNavComponent implements OnInit {
  @Input() categories: Array<string>;
  constructor() { }

  ngOnInit(): void {
  }

}
