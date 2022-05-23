import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  templateUrl: './schedule-service.component.html'
})
export class ScheduleServiceComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
    ) {
    this.titleService.setTitle('Schedule Service - Appliance Repair in Sacramento');
    this.meta.updateTag({ name: 'description', content: 'Schedule Service | Appliance Repair in Sacramento' });
  }

  ngOnInit() {
  }
}
