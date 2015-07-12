var loginPage = require('../pages/login_page');

describe('Login page', function() {
  it('should log in with correct credentials', function() {
    loginPage.go();
    var presentationsGalleryPage = loginPage.login();
    expect(presentationsGalleryPage.getTitle()).toBe('Presentations Gallery');
  });
});