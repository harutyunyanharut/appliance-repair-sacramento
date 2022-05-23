import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  templateUrl: './range-hood-installation.component.html'
})
export class RangeHoodInstallationComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
    ) {
    this.titleService.setTitle('Range Hood Installation');
    this.meta.updateTag({ name: 'description', content: 'Range Hood Installation is looking forward to your call' });
  }

  ngOnInit() {
  }

}
