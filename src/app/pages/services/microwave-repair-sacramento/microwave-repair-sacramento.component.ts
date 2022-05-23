import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  templateUrl: './microwave-repair-sacramento.component.html'
})
export class MicrowaveRepairFresnoComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
    ) {
    this.titleService.setTitle('Microwave Repair Sacramento');
    this.meta.updateTag({ name: 'description', content: 'Microwave Repair Sacramento is looking forward to your call' });
  }

  ngOnInit() {
  }

}
