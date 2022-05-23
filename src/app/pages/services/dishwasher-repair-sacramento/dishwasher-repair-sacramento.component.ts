import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  templateUrl: './dishwasher-repair-sacramento.component.html'
})
export class DishwasherRepairFresnoComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
    ) {
    this.titleService.setTitle('Dishwasher repair Fresno');
    this.meta.updateTag({ name: 'description', content: 'Dishwasher repair Fresno is looking forward to your call' });
  }

  ngOnInit() {
  }

}
