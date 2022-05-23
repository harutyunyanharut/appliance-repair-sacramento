import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  templateUrl: './washer-repair-sacramento.component.html'
})
export class WasherRepairFresnoComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
    ) {
    this.titleService.setTitle('Washer Repair Sacramento');
    this.meta.updateTag({ name: 'description', content: 'Washer Repair Sacramento is looking forward to your call' });
  }

  ngOnInit() {
  }

}
