import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public brands = [
    {class: 'bg-KitchenAid'},
    {class: 'bg-Maytag'},
    {class: 'bg-Miele'},
    {class: 'bg-New_LG'},
    {class: 'bg-Premier'},
    {class: 'bg-samsung'},
    {class: 'bg-Thermadore'},
    {class: 'bg-Viking'},
    {class: 'bg-whirlpool'},
    {class: 'bg-wolf'},
    {class: 'bg-zero'},
    {class: 'bg-Amana'},
    {class: 'bg-Avanti'},
    {class: 'bg-Bertazzoni'},
    {class: 'bg-Bosch'},
    {class: 'bg-Electrolux'},
    {class: 'bg-Fisher_and_Paykel'},
    {class: 'bg-frigidaire'},
    {class: 'bg-Galanz'},
    {class: 'bg-GE'},
    {class: 'bg-Haier'},
    {class: 'bg-Hotpoint'},
    {class: 'bg-Jenn_Air'},
    {class: 'bg-Kenmore'},
  ];

  constructor(
    private titleService: Title,
    ) {
    this.titleService.setTitle('Appliance Repair in Sacramento');
  }

  ngOnInit() {
  }


}
