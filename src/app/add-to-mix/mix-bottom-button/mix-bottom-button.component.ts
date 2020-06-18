import { Component, OnInit } from '@angular/core';
import { faMortarPestle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mix-bottom-button',
  templateUrl: './mix-bottom-button.component.html',
  styleUrls: ['./mix-bottom-button.component.css']
})
export class MixBottomButtonComponent implements OnInit {

  constructor() { }
  faMortarPestle = faMortarPestle;
  ngOnInit(): void {
  }

}
