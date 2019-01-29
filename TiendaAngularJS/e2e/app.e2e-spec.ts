import { TiendaAngularJSPage } from './app.po';

describe('tienda-angular-js App', function() {
  let page: TiendaAngularJSPage;

  beforeEach(() => {
    page = new TiendaAngularJSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
