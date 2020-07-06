import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upgrade-chef',
  templateUrl: './upgrade-chef.component.html',
  styleUrls: ['./upgrade-chef.component.css']
})
export class UpgradeChefComponent implements OnInit {
  lista: string[];
  constructor() {
    this.lista = ['Unlock All Templates Free', 'Publish Your Waflies', 'Live Support', 'Create Custom Waflies'];
  }

  ngOnInit(): void {
  }

}
