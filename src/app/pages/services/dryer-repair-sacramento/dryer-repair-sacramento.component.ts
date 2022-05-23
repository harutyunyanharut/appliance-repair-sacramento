import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  templateUrl: './dryer-repair-sacramento.component.html'
})
export class DryerRepairFresnoComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
    ) {
    this.titleService.setTitle('Dryer Repair Fresno');
    this.meta.updateTag({ name: 'description', content: 'Dryer Repair Fresno is looking forward to your call' });
  }

  ngOnInit() {
  }

}
