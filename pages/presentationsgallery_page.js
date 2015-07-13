var BasePage = require('./base_page');

var PresentationsGalleryPage = function() {
  var lblTitle = $('h4');
  var btnCreateTemplate = $('.btn.add-presentation.ng-scope');
  var eleNavBar = $('#mainNavbar');

  this.getTitle = function() {
    return lblTitle.getText();
  };

  this.createTemplate = function() {
    btnCreateTemplate.click();
    return require('./createtemplate_page.js');
  };
};

PresentationsGalleryPage.prototype = BasePage;
module.exports = new PresentationsGalleryPage();