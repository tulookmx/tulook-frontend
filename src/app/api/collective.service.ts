import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs';

const basePath = 'http://api.shopstyle.com/api/v2';
const apiKey = 'uid2676-30773526-77';

@Injectable()
export class CollectiveService {
  options: URLSearchParams = new URLSearchParams;

  constructor(private http: Http) {
    this.options.set('pid', apiKey);
  }

  public getProducts(cat: string, offset?: string, limit = '50', sort = 'Popular'): Observable<Response> {
    this.options.set('cat', cat);
    if (offset) {
      this.options.set('offset', offset);
    }
    if (limit) {
      this.options.set('limit', limit);
    }
    this.options.set('sort', sort);
    return this.http
      .get(`${basePath}/products`, { search: this.options });
  }

  public getProduct(id: string): Observable<Response> {
    return this.http
      .get(`${basePath}/products/${id}`, { search: this.options });
  }

  public seeMoreProducts(fts: string, limit = '20', sort = 'Popular'): Observable<Response> {
    this.options.set('fts', fts);
    this.options.set('limit', limit);
    this.options.set('sort', sort);
    return this.http
      .get(`${basePath}/products`, { search: this.options });
  }
}
