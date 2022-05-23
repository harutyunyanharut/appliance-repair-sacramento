import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  templateUrl: './whirlpool-repair-sacramento.component.html'
})
export class WhirlpoolRepairFresnoComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
    ) {
    this.titleService.setTitle('Whirlpool Repair Sacramento');
    this.meta.updateTag({ name: 'description', content: 'Whirlpool appliances are one of the most popular brands in the market today.  Hence, a lot of people depend on their Whirlpool appliances every day' });
  }

  ngOnInit() {
  }

}
