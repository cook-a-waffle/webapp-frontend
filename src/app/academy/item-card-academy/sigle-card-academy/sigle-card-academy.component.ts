import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sigle-card-academy',
  templateUrl: './sigle-card-academy.component.html',
  styleUrls: ['./sigle-card-academy.component.css']
})
export class SigleCardAcademyComponent implements OnInit {
  @Input() card: any;
  constructor() { }

  ngOnInit(): void {
  }

}
