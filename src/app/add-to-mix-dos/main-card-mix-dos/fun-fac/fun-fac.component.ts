import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fun-fac',
  templateUrl: './fun-fac.component.html',
  styleUrls: ['./fun-fac.component.css']
})
export class FunFacComponent implements OnInit {
  @Input() item: any;
  constructor() { }

  ngOnInit(): void {
  }

}
