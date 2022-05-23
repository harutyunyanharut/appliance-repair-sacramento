import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  templateUrl: './maytag-repair-sacramento.component.html'
})
export class MaytagRepairFresnoComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
    ) {
    this.titleService.setTitle('Maytag Repair Sacramento');
    this.meta.updateTag({ name: 'description', content: 'Maytag started its business as a washer and dryer company in 1893. Over the last 100 years, Maytag began expanding from the laundry room to the kitchen' });
  }

  ngOnInit() {
  }

}
