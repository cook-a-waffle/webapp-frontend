import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-main-card-mix-dos',
  templateUrl: './main-card-mix-dos.component.html',
  styleUrls: ['./main-card-mix-dos.component.css']
})
export class MainCardMixDosComponent implements OnInit {

  constructor() { }
  faPlusCircle = faPlusCircle;
  ngOnInit(): void {
  }

}
