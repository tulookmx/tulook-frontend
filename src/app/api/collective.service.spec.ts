import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { CollectiveService } from './collective.service';

describe('Collective Service', () => {
  beforeEachProviders(() => [CollectiveService]);

  it('should ...',
      inject([CollectiveService], (service: CollectiveService) => {
    expect(service).toBeTruthy();
  }));
});
