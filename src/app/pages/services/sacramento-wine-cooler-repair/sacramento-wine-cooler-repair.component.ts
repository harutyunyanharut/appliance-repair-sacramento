import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  templateUrl: './sacramento-wine-cooler-repair.component.html'
})
export class FresnoWineCoolerRepairComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
    ) {
    this.titleService.setTitle('Fresno Wine Cooler Repair');
    this.meta.updateTag({ name: 'description', content: 'Fresno Wine Cooler Repair is looking forward to your call' });
  }

  ngOnInit() {
  }

}
