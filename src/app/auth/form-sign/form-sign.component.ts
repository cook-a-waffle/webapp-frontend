import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-form-sign',
  templateUrl: './form-sign.component.html',
  styleUrls: ['./form-sign.component.css']
})
export class FormSignComponent implements OnInit {

  constructor() { }
  faEnvelope = faEnvelope;
  faUnlockAlt = faUnlockAlt;
  ngOnInit(): void {
  }

}
