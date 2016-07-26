import { EXXAMPLEPage } from './app.po';

describe('exxample App', function() {
  let page: EXXAMPLEPage;

  beforeEach(() => {
    page = new EXXAMPLEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
