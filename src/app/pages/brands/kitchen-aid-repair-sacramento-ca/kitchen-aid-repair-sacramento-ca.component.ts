import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  templateUrl: './kitchen-aid-repair-sacramento-ca.component.html'
})
export class KitchenAidRepairFresnoCaComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
    ) {
    this.titleService.setTitle('KitchenAid Repair Fresno');
    this.meta.updateTag({ name: 'description', content: 'KitchenAid is one of the popular brands of appliances! It was founded in 1919 by Hobart Corporation. At first KitchenAid was strictly a dishwasher and mixer' });
  }

  ngOnInit() {
  }

}
