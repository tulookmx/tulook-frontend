import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TulookFrontendAppComponent } from '../app/tulook-frontend.component';

beforeEachProviders(() => [TulookFrontendAppComponent]);

describe('App: TulookFrontend', () => {
  it('should create the app',
      inject([TulookFrontendAppComponent], (app: TulookFrontendAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'tulook-frontend works!\'',
      inject([TulookFrontendAppComponent], (app: TulookFrontendAppComponent) => {
    expect(app.title).toEqual('tulook-frontend works!');
  }));
});
