import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  templateUrl: './appliance-technician-job.component.html'
})
export class ApplianceTechnicianJobComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
    ) {
    this.titleService.setTitle('Appliance Technician Job');
    this.meta.updateTag({ name: 'description', content: 'Company: Sacramento Appliance Repair' });
  }

  ngOnInit() {
  }

}
