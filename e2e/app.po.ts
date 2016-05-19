export class TulookFrontendPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tulook-frontend-app h1')).getText();
  }
}
