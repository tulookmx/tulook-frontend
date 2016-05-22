import { Component, OnInit } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'tl-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css'],
  directives: [MdToolbar, MdIcon, ROUTER_DIRECTIVES],
  providers: [MdIconRegistry]
})
export class NavComponent implements OnInit {
  categories: Array<string>;
  logo = './../../../assets/images/tulook-logo.png';

  constructor(private router: Router) {}

  ngOnInit() {
    this.categories = [
      'mujeres',
      'hombres',
      'bebes',
      'hogar',
      'ofertas',
      'liquidacion'
    ];
  }

  goHome() {
    this.router.navigateByUrl('/');
  }

  openMenu() {
    console.log(this);
  }

}
