import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-to-mix-dos',
  templateUrl: './add-to-mix-dos.component.html',
  styleUrls: ['./add-to-mix-dos.component.css']
})
export class AddToMixDosComponent implements OnInit {
  @Input() items: Array<any> = new Array();
  constructor() {
    this.items = this.buildInput(3);
  }


  buildInput(times: number) {
    let inputs: Array<any> = new Array();
    for (let index = 1; index <= times; index++) {
      inputs.push({
        title: `Fun fac ${index}`,
        id: `ff${index}`
      });
    }
    return inputs;
  }

  ngOnInit(): void {
  }

}
