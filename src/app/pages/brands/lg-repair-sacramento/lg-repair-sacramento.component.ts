import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  templateUrl: './lg-repair-sacramento.component.html'
})
export class LgRepairFresnoComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
    ) {
    this.titleService.setTitle('LG Repair Sacramento');
    this.meta.updateTag({ name: 'description', content: 'LG is one of the most trusted home appliance brands. It was established in 1958 as a Goldstar. Later in 1995 Goldstar merged with Lucky changing the corporate' });
  }

  ngOnInit() {
  }

}
