import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { CategoriesMapService } from './categories-map.service';

describe('CategoriesMap Service', () => {
  beforeEachProviders(() => [CategoriesMapService]);

  it('should ...',
      inject([CategoriesMapService], (service: CategoriesMapService) => {
    expect(service).toBeTruthy();
  }));
});
