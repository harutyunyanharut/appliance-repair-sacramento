import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  templateUrl: './sub-zero-repair-sacramento-ca.component.html'
})
export class SubZeroRepairFresnoCaComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
    ) {
    this.titleService.setTitle('Sub-Zero Repair Sacramento');
    this.meta.updateTag({ name: 'description', content: 'The Sub-Zero brand is famous for designing and manufacturing built-to-last, high-end products.' });
  }

  ngOnInit() {
  }

}
