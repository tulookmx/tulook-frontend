declare function require(name:string);
import { Component, OnInit } from '@angular/core';
import { HeaderComponent, FooterComponent} from './shared';
import { HomePageComponent } from './+home-page';
import { Router, Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { BrowsePageComponent } from './+browse-page';
import { ProductPageComponent } from './+product-page';

@Component({
  moduleId: module.id,
  selector: 'tulook-frontend-app',
  templateUrl: 'tulook-frontend.component.html',
  styleUrls: [ 'tulook-frontend.component.css' ],
  directives: [
    HeaderComponent,
    FooterComponent,
    ROUTER_DIRECTIVES,
  ],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/', component: HomePageComponent},
  {path: '/b/:cat', component: BrowsePageComponent},
  {path: '/p/:id', component: ProductPageComponent}
])
export class TulookFrontendAppComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
    console.log(this.router);
  }

}
