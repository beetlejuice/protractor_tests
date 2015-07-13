var loginPage = require('../pages/login_page');

describe('Login page', function() {
  it('should log in with correct credentials', function() {
    loginPage.go();
    var presentationsGalleryPage = loginPage.logIn();
    expect(presentationsGalleryPage.isLoggedIn()).toBe(true);
    loginPage = presentationsGalleryPage.logOut();
    expect(loginPage.isLoggedIn()).toBe(false);
  });
});