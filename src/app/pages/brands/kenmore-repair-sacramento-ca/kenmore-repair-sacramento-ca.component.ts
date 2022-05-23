import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  templateUrl: './kenmore-repair-sacramento-ca.component.html'
})
export class KenmoreRepairFresnoCaComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
    ) {
    this.titleService.setTitle('Kenmore Repair Sacramento');
    this.meta.updateTag({ name: 'description', content: 'Kenmore is an exclusive brand of household appliance and it is established by Sears Holding. Kenmore offers a full line of modern appliances' });
  }

  ngOnInit() {
  }

}
