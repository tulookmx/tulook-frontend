import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { SearchBarComponent } from './search-bar/index';
import { NavComponent } from './nav/index';
import { BannerComponent } from './banner/index';

@Component({
  moduleId: module.id,
  selector: 'tl-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  directives: [SearchBarComponent, NavComponent, BannerComponent],
  providers: [HTTP_PROVIDERS]
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
