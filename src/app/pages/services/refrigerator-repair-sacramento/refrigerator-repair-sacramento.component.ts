import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  templateUrl: './refrigerator-repair-sacramento.component.html'
})
export class RefrigeratorRepairFresnoComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
    ) {
    this.titleService.setTitle('Refrigerator Repair Fresno');
    this.meta.updateTag({ name: 'description', content: 'Refrigerator Repair Fresno is looking forward to your call' });
  }

  ngOnInit() {
  }

}
