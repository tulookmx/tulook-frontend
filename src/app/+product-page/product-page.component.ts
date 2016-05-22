import { Component, OnInit } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { RouteSegment } from '@angular/router';
import { CollectiveService } from './../api/index';
import { SpinnerComponent, ProductCellComponent } from './../shared/';

import * as _ from 'lodash';

@Component({
  moduleId: module.id,
  selector: 'tl-product-page',
  templateUrl: 'product-page.component.html',
  styleUrls: ['product-page.component.css'],
  directives: [SpinnerComponent, ProductCellComponent],
  providers: [CollectiveService, Http, HTTP_PROVIDERS]
})
export class ProductPageComponent implements OnInit {
  productId: string;
  product: any;
  images: Array<any> = [];
  loading: boolean = false;
  loadingSimilar: boolean = false;
  imageIndex: number = 0;
  similar: Array<any> = [];

  constructor(private segment: RouteSegment, private collective: CollectiveService) {}

  ngOnInit() {
    this.productId = this.segment.parameters['id'];
    this.getProduct();
  }

  getProduct() {
    this.loading = true;
    this.collective
      .getProduct(this.productId)
      .map(res => res.text())
      .subscribe(data => {
        const result = JSON.parse(data);
        this.product = result;
        this.productReady();
        this.loading = false;
        this.getSimilarProducts();
        // location.pathname = `/p/${_.kebabCase(this.product.name)}`;
      });
  }

  getSimilarProducts() {
    this.loadingSimilar = true;
    this.collective
      .seeMoreProducts(this.product.seeMoreLabel, '14')
      .map(res => res.text())
      .subscribe(data => {
        const results = JSON.parse(data);
        this.similar = results.products;
        this.loadingSimilar = false;
        console.log(this.similar);
        // location.pathname = `/p/${_.kebabCase(this.product.name)}`;
      });
  }

  productReady() {
    this.images = [this.product.image].concat(this.product.alternateImages).map(e => e);
  }

  selectImage(index: number) {
    this.imageIndex = index;
  }

  clickOut(url) {
    window.open(url, '_blank');
  }
}
