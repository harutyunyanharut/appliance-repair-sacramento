import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  templateUrl: './washer-dryer-repair-sacramento.component.html'
})
export class WasherDryerRepairFresnoComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
    ) {
    this.titleService.setTitle('Washer Dryer Repair Sacramento');
    this.meta.updateTag({ name: 'description', content: 'Washer Dryer Repair Sacramento is looking forward to your call' });
  }

  ngOnInit() {
  }

}
