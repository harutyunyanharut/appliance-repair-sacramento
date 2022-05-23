import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  templateUrl: './viking-repair-sacramento.component.html'
})
export class VikingRepairFresnoComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
    ) {
    this.titleService.setTitle('Viking Repair Sacramento');
    this.meta.updateTag({ name: 'description', content: 'Viking Corporation, the originator of the commercial type cooking appliances in the world, was founded in 1987 by Fred Carl in Greenwood, Mississippi.' });
  }

  ngOnInit() {
  }

}
