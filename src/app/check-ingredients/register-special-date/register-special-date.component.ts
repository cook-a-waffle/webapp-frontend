import { Component, OnInit } from '@angular/core';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-register-special-date',
  templateUrl: './register-special-date.component.html',
  styleUrls: ['./register-special-date.component.css']
})
export class RegisterSpecialDateComponent implements OnInit {
  faPlayCircle = faPlayCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
