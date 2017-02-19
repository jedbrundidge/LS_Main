import { LSPage } from './app.po';

describe('ls App', function() {
  let page: LSPage;

  beforeEach(() => {
    page = new LSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
