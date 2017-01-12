import { Angular2DiretivasPage } from './app.po';

describe('angular2-diretivas App', function() {
  let page: Angular2DiretivasPage;

  beforeEach(() => {
    page = new Angular2DiretivasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
