import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-card-template',
  templateUrl: './main-card-template.component.html',
  styleUrls: ['./main-card-template.component.css']
})
export class MainCardTemplateComponent implements OnInit {
  @Input() items: Array<any>;
  @Input() categories: Array<string>;
  constructor() { }

  ngOnInit(): void {
  }

}
