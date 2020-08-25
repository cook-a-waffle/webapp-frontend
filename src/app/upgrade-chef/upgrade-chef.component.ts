import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-upgrade-chef',
  templateUrl: './upgrade-chef.component.html',
  styleUrls: ['./upgrade-chef.component.css']
})
export class UpgradeChefComponent implements OnInit {
  lista: string[];
  faTimes = faTimes;
  constructor(private location: Location) {
    this.lista = ['Unlock All Templates Free', 'Publish Your Waflies', 'Live Support', 'Create Custom Waflies'];
  }

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
  }

}
