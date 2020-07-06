import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item-upgrade',
  templateUrl: './list-item-upgrade.component.html',
  styleUrls: ['./list-item-upgrade.component.css']
})
export class ListItemUpgradeComponent implements OnInit {
  @Input() lista: string[];
  constructor() {
  }

  ngOnInit(): void {
  }

}
