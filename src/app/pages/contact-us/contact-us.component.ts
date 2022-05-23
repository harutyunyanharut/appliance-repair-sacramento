import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  templateUrl: './contact-us.component.html'
})
export class ContactUsComponent implements OnInit {
  constructor(
    private titleService: Title,
    private meta: Meta
    ) {
    this.titleService.setTitle('Contact Us - Appliance Repair in Sacramento');
    this.meta.updateTag({ name: 'description', content: 'Contact Us | Appliance Repair in Fresno' });
  }

  ngOnInit() {
  }
}
