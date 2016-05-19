import { TulookFrontendPage } from './app.po';

describe('tulook-frontend App', function() {
  let page: TulookFrontendPage;

  beforeEach(() => {
    page = new TulookFrontendPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tulook-frontend works!');
  });
});
