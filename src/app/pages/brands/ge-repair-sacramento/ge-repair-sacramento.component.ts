import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  templateUrl: './ge-repair-sacramento.component.html'
})
export class GeRepairFresnoComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
    ) {
    this.titleService.setTitle('GE Repair Sacramento');
    this.meta.updateTag({ name: 'description', content: 'GE is one of the largest suppliers of the appliances in the world. And as a result, they have made their way into more homes in the Unites States.' });
  }

  ngOnInit() {
  }

}
