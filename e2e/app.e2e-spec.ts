import { AngularDynamicFormsPage } from './app.po';

describe('angular-dynamic-forms App', () => {
  let page: AngularDynamicFormsPage;

  beforeEach(() => {
    page = new AngularDynamicFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
