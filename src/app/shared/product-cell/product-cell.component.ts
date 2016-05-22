import { Component, OnInit, Input } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'tl-product-cell',
  templateUrl: 'product-cell.component.html',
  styleUrls: ['product-cell.component.css'],
  directives: [MD_CARD_DIRECTIVES, MdIcon],
  providers: [MdIconRegistry]
})
export class ProductCellComponent implements OnInit {
  @Input()
  product: any;

  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.product);
  }

  goToProductPage(product: any) {
    this.router.navigateByUrl(`/p/${product.id}`);
  }
}
