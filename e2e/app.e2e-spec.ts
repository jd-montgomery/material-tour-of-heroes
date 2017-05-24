import { MaterialTourOfHeroesPage } from './app.po';

describe('material-tour-of-heroes App', () => {
  let page: MaterialTourOfHeroesPage;

  beforeEach(() => {
    page = new MaterialTourOfHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
