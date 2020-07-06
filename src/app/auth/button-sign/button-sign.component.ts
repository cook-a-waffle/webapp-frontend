import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-sign',
  templateUrl: './button-sign.component.html',
  styleUrls: ['./button-sign.component.css']
})
export class ButtonSignComponent implements OnInit {
  @Input() title: string;
  @Input() path: string;
  @Input() links: string;
  @Input() legend: string;
  constructor() { }

  ngOnInit(): void {
  }

}
