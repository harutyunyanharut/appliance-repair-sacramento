import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  templateUrl: './service-area.component.html'
})
export class ServiceAreaComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
    ) {
    this.titleService.setTitle('Service Area - Appliance Repair in Sacramento');
    this.meta.updateTag({ name: 'description', content: 'Appliance Repair in Sacramento provides services in the  Sacramento area as well as in Clovis.' });
  }

  ngOnInit() {
  }

}
