import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tl-hero',
  templateUrl: 'hero.component.html',
  styleUrls: ['hero.component.css']
})
export class HeroComponent implements OnInit {
  backgroundUrl: string = 'assets/images/hero.png';

  constructor() {
    console.log(this.backgroundUrl);

  }

  ngOnInit() {
  }

}
