import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  templateUrl: './ice-maker-repair-sacramento.component.html'
})
export class IceMakerRepairFresnoComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
    ) {
    this.titleService.setTitle('Ice Maker Repair Fresno');
    this.meta.updateTag({ name: 'description', content: 'Ice Maker Repair Fresno is looking forward to your call' });
  }

  ngOnInit() {
  }

}
