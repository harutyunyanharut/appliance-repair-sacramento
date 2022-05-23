import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  templateUrl: './jenn-air-repair-sacramento.component.html'
})
export class JennAirRepairFresnoComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
    ) {
    this.titleService.setTitle('Jenn-Air Repair Sacramento');
    this.meta.updateTag({ name: 'description', content: 'Jenn - Air Company was founded in 1947 by Louis J. Jenn in Indiana. At first the company was focused on producing and selling industrial fans. Later, in 1961' });
  }

  ngOnInit() {
  }

}
