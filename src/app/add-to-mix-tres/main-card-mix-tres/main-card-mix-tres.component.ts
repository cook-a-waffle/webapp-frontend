import { Component, OnInit } from '@angular/core';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-main-card-mix-tres',
  templateUrl: './main-card-mix-tres.component.html',
  styleUrls: ['./main-card-mix-tres.component.css']
})
export class MainCardMixTresComponent implements OnInit {

  constructor() { }
  faMinus = faMinus;
  faPlus = faPlus;
  faLongArrowAltRight = faLongArrowAltRight;
  ngOnInit(): void {
  }

}
