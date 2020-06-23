import { Component, OnInit } from '@angular/core';
import { faMortarPestle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mix-bottom-button-dos',
  templateUrl: './mix-bottom-button-dos.component.html',
  styleUrls: ['./mix-bottom-button-dos.component.css']
})
export class MixBottomButtonDosComponent implements OnInit {

  constructor() { }
  faMortarPestle = faMortarPestle;
  ngOnInit(): void {
  }
}
