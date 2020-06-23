import { Component, OnInit } from '@angular/core';
import { faMortarPestle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-mix-bottom-button-tres',
  templateUrl: './mix-bottom-button-tres.component.html',
  styleUrls: ['./mix-bottom-button-tres.component.css']
})
export class MixBottomButtonTresComponent implements OnInit {

  constructor() { }
  faMortarPestle = faMortarPestle;
  ngOnInit(): void {
  }

}
