import { Component, OnInit } from '@angular/core';
import { APP_SHELL_DIRECTIVES } from '@angular/app-shell';
import { MdToolbar } from '@angular2-material/toolbar';
import { HeroComponent } from './hero/index';
import { SpinnerComponent } from './../shared';

@Component({
  moduleId: module.id,
  selector: 'tl-home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.css'],
  directives: [APP_SHELL_DIRECTIVES, MdToolbar, HeroComponent, SpinnerComponent],
})
export class HomePageComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    console.log(this);
  }

}
