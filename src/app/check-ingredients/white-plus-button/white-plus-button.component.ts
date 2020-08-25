import { Component, OnInit, Input } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-white-plus-button',
  templateUrl: './white-plus-button.component.html',
  styleUrls: ['./white-plus-button.component.css']
})
export class WhitePlusButtonComponent implements OnInit {

  @Input() title: string;
  constructor() { }
  faPlusCircle = faPlusCircle;
  ngOnInit(): void {
  }

}
