import { Component, OnInit } from '@angular/core';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'tl-banner',
  templateUrl: 'banner.component.html',
  styleUrls: ['banner.component.css'],
  providers: [MdIconRegistry],
  directives: [MdIcon],
})
export class BannerComponent implements OnInit {
  showBanner: boolean = true;

  constructor() {}

  ngOnInit() {
  }

  toggleBanner() {
    this.showBanner = !this.showBanner
  }

}
