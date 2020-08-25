import { Component, OnInit, Input } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-main-card-mix-dos',
  templateUrl: './main-card-mix-dos.component.html',
  styleUrls: ['./main-card-mix-dos.component.css']
})
export class MainCardMixDosComponent implements OnInit {
  @Input() items: Array<any>;
  op: number;
  constructor() {
    this.op = 2;
  }
  faPlusCircle = faPlusCircle;
  ngOnInit(): void {
  }

}
