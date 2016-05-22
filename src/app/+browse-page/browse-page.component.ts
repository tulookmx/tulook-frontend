import { Component, OnInit } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { RouteSegment} from '@angular/router';
import { CategoriesMapService } from './../services/index';
import { CollectiveService } from './../api/index';
import { SpinnerComponent, ProductCellComponent } from './../shared';
import { InfiniteScroll } from '../directives/index';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import * as _ from 'lodash';

@Component({
  moduleId: module.id,
  selector: 'tl-browse-page',
  templateUrl: 'browse-page.component.html',
  styleUrls: ['browse-page.component.css'],
  directives: [SpinnerComponent, ProductCellComponent, InfiniteScroll, MdIcon],
  providers: [CategoriesMapService, CollectiveService, Http, HTTP_PROVIDERS, MdIconRegistry],
})
export class BrowsePageComponent implements OnInit {
  products: Array<any> = [];
  filters: Array<string>;
  metadata: any;
  catSpanish: string;
  catEnglish: string;
  offset: number = 0;
  loading: boolean = false;
  scrolling: boolean = false;

  constructor(
    private segment: RouteSegment,
    private categories: CategoriesMapService,
    private collective: CollectiveService,
    private http: Http
  ) {
    this.filters = [
      'categories',
      'brand',
      'price',
      'color',
      'sales & deals',
      'store',
    ];
  }

  ngOnInit() {
    this.catSpanish = this.segment.parameters['cat'];
    this.catEnglish = this.categories.translateToEnglish(this.catSpanish);
    this.getProducts();
  }

  getProducts() {
    this.loading = true;
    this.collective
      .getProducts(this.catEnglish)
      .map(res => res.text())
      .subscribe(data => {
        const results = JSON.parse(data);
        this.metadata = results.metadata;
        this.products = _.concat(this.products, results.products);
        this.loading = false;
      });
  }

  getMoreProducts() {
    if (this.offset < 10) {
      this.scrolling = true;
      this.offset++;
      this.collective
        .getProducts(this.catEnglish, String(this.offset * 50))
        .map(res => res.text())
        .subscribe(data => {
          const results = JSON.parse(data);
          this.products = _.concat(this.products, results.products);
          this.scrolling = false;
        });
    }
  }
}
