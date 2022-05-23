import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  templateUrl: './oven-repair-sacramento.component.html'
})
export class OvenRepairFresnoComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
    ) {
    this.titleService.setTitle('Oven Repair Fresno');
    this.meta.updateTag({ name: 'description', content: 'Oven Repair Fresno is looking forward to your call' });
  }

  ngOnInit() {
  }

}
