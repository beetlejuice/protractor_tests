var loginPage = require('../pages/login_page');

describe('Create template', function() {
  it('should be possible to create template', function() {
    loginPage.go();
    var presentationsGalleryPage = loginPage.login();
    var createTemplatePage = presentationsGalleryPage.createTemplate();
    
    
  });
});