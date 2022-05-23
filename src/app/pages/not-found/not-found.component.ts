import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.titleService.setTitle('404 - Appliance Repair in Sacramento');
    this.meta.updateTag({ name: 'robots', content: 'noindex,nofollow' });
  }

  ngOnInit() {
  }

}
