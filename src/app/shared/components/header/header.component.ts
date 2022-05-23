import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {

  }

  public isUserOnHome(): boolean {
    const regex = /[^\/?\s]/g;
    return this.router.url === '/' || this.router.url.search(regex) > 1;
  }
}
