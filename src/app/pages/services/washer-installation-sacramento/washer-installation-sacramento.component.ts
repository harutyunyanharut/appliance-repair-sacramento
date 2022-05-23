import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  templateUrl: './washer-installation-sacramento.component.html'
})
export class WasherInstallationFresnoComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
    ) {
    this.titleService.setTitle('Washer Installation Sacramento');
    this.meta.updateTag({ name: 'description', content: 'Washer Installation Sacramento is looking forward to your call' });
  }

  ngOnInit() {
  }

}
