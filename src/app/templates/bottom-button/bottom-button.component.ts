import { Component, OnInit, Input } from '@angular/core';
import { faMortarPestle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-bottom-button',
  templateUrl: './bottom-button.component.html',
  styleUrls: ['./bottom-button.component.css']
})
export class BottomButtonComponent implements OnInit {
  faMortarPestle = faMortarPestle;
  @Input() title: string;
  @Input() classCustome: string;
  @Input() modePosition: string;
  @Input() path: string;
  constructor() { }
  ngOnInit(): void {
  }

}
