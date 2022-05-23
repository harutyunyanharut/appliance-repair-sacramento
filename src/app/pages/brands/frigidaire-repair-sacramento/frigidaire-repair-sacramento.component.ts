import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  templateUrl: './frigidaire-repair-sacramento.component.html'
})
export class FrigidaireRepairFresnoComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
    ) {
    this.titleService.setTitle('Frigidaire Repair Sacramento');
    this.meta.updateTag({ name: 'description', content: 'Frigidaire Appliances! Did you notice that it sounds like the word “fridge”? And did you know that Frigidaire is the company that invented refrigerators?' });
  }

  ngOnInit() {
  }

}
