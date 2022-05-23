import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  templateUrl: './freezer-repair-sacramento.component.html'
})
export class FreezerRepairFresnoComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
    ) {
    this.titleService.setTitle('Freezer Repair Fresno');
    this.meta.updateTag({ name: 'description', content: 'Freezer Repair Fresno is looking forward to your call' });
  }

  ngOnInit() {
  }

}
