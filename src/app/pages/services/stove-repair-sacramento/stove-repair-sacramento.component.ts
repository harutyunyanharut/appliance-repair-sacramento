import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  templateUrl: './stove-repair-sacramento.component.html'
})
export class StoveRepairFresnoComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
    ) {
    this.titleService.setTitle('Stove repair Sacramento');
    this.meta.updateTag({ name: 'description', content: 'Stove repair Sacramento is looking forward to your call' });
  }

  ngOnInit() {
  }

}
