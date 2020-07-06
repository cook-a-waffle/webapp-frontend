import { Component, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-link-accounts',
  templateUrl: './link-accounts.component.html',
  styleUrls: ['./link-accounts.component.css']
})
export class LinkAccountsComponent implements OnInit {
  faInfoCircle = faInfoCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
